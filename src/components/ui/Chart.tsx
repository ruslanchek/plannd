import React, { useMemo } from 'react';
import Svg, { Path } from 'react-native-svg';

interface IPoint {
  time: number;
  value: number;
}

interface ICoords {
  x: number;
  y: number;
}

type TCatmull = ICoords[];

interface IDimensions {
  minTime: number;
  maxTime: number;
  minValue: number;
  maxValue: number;
}

export const Chart = () => {
  const width = 300;
  const height = 100;
  const strokeWidth = 2;
  const paddingBotom = strokeWidth;
  const paddingTop = strokeWidth;
  const paddingLeft = strokeWidth;
  const paddingRight = strokeWidth;
  const points: IPoint[] = [
    { time: 0, value: 1 },
    { time: 1, value: 2 },
    { time: 2, value: 0 },
    { time: 3, value: 3 },
    { time: 4, value: 2 },
    { time: 5, value: 4 },
    { time: 6, value: 1 },
    { time: 7, value: 2 },
    { time: 8, value: 3.2 },
    { time: 9, value: 2.3 },
  ];

  const dimensions: IDimensions = useMemo(() => {
    let minTime = Infinity;
    let maxTime = -Infinity;
    let minValue = Infinity;
    let maxValue = -Infinity;

    for (let i = 0, l = points.length; i < l; i++) {
      const point = points[i];

      if (point.time < minTime) {
        minTime = point.time;
      }

      if (point.time > maxTime) {
        maxTime = point.time;
      }

      if (point.value < minValue) {
        minValue = point.value;
      }

      if (point.value > maxValue) {
        maxValue = point.value;
      }
    }

    return { minTime, maxTime, minValue, maxValue };
  }, [width, height, points]);

  const getYFromValue = (value: number): number => {
    const { minValue, maxValue } = dimensions;
    const coeff = (value - minValue) / (maxValue - minValue);
    return height - paddingBotom - (height - (paddingTop + paddingBotom)) * coeff;
  };

  const getXFromTime = (time: number): number => {
    const { minTime, maxTime } = dimensions;
    const coeff = (time - minTime) / (maxTime - minTime);
    return width - paddingRight - (width - (paddingLeft + paddingRight)) * coeff;
  };

  const coords: ICoords[] = useMemo(() => {
    return points.map(point => {
      return {
        x: getXFromTime(point.time),
        y: getYFromValue(point.value),
      };
    });
  }, [dimensions, points]);

  const catmull: TCatmull[] = useMemo(() => {
    const result: TCatmull[] = [];

    for (let i = 0; i < coords.length - 1; i++) {
      const p: ICoords[] = [];
      const bp: ICoords[] = [];

      p.push({
        x: coords[Math.max(i - 1, 0)].x,
        y: coords[Math.max(i - 1, 0)].y,
      });
      p.push({
        x: coords[i].x,
        y: coords[i].y,
      });
      p.push({
        x: coords[i + 1].x,
        y: coords[i + 1].y,
      });
      p.push({
        x: coords[Math.min(i + 2, coords.length - 1)].x,
        y: coords[Math.min(i + 2, coords.length - 1)].y,
      });

      bp.push({
        x: (-p[0].x + 6 * p[1].x + p[2].x) / 6,
        y: (-p[0].y + 6 * p[1].y + p[2].y) / 6,
      });
      bp.push({
        x: (p[1].x + 6 * p[2].x - p[3].x) / 6,
        y: (p[1].y + 6 * p[2].y - p[3].y) / 6,
      });
      bp.push({
        x: p[2].x,
        y: p[2].y,
      });

      result.push(bp);
    }

    return result;
  }, [coords]);

  const linePath: string = useMemo(() => {
    let result = `M${coords[0].x},${coords[0].y} `;

    for (let i = 0; i < catmull.length; i++) {
      result += `C${catmull[i][0].x},${catmull[i][0].y} ${catmull[i][1].x},${catmull[i][1].y} ${catmull[i][2].x},${catmull[i][2].y} `;
    }

    return result;
  }, [catmull]);

  const areaPath: string = useMemo(() => {
    let result = `M${paddingLeft},${height + paddingBotom} L${width - paddingRight},${height +
      paddingBotom} L${coords[0].x},${coords[0].y} `;

    for (let i = 0; i < catmull.length; i++) {
      result += `C${catmull[i][0].x},${catmull[i][0].y} ${catmull[i][1].x},${catmull[i][1].y} ${catmull[i][2].x},${catmull[i][2].y} `;
    }

    console.log(result);

    return result;
  }, [linePath, height, width]);

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <Path stroke='white' fill='transparent' strokeWidth={strokeWidth} d={linePath} />
      <Path fill='rgba(255, 255, 255, .1)' d={areaPath} />
    </Svg>
  );
};
