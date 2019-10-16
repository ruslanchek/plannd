import React from 'react';

import Svg, { Path } from 'react-native-svg';

export const Chart = () => {
  const catmullRom2bezier = (points: { x: number; y: number }[]) => {
    const result = [];

    for (let i = 0; i < points.length - 1; i++) {
      const p = [];
      const bp = [];

      p.push({
        x: points[Math.max(i - 1, 0)].x,
        y: points[Math.max(i - 1, 0)].y,
      });
      p.push({
        x: points[i].x,
        y: points[i].y,
      });
      p.push({
        x: points[i + 1].x,
        y: points[i + 1].y,
      });
      p.push({
        x: points[Math.min(i + 2, points.length - 1)].x,
        y: points[Math.min(i + 2, points.length - 1)].y,
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
  };

  const makePath = points => {
    const catmull = catmullRom2bezier(points);
    let result = 'M' + points[0].x + ',' + points[0].y + ' ';

    for (let i = 0; i < catmull.length; i++) {
      result +=
        'C' +
        catmull[i][0].x +
        ',' +
        catmull[i][0].y +
        ' ' +
        catmull[i][1].x +
        ',' +
        catmull[i][1].y +
        ' ' +
        catmull[i][2].x +
        ',' +
        catmull[i][2].y +
        ' ';
    }
    return result;
  };

  const graph = [2, 2, 5, 8, 5, 4, 3, 9];
  const points = [];

  for (let i = 0; i < graph.length; i++) {
    points.push({ x: i * 50 + 20, y: graph[i] * 40 * -1 + 400 });
  }

  console.log(makePath(points));

  return (
    <Svg height='50%' width='50%' viewBox='0 0 100 100'>
      <Path stroke='black' fill='red' strokeWidth={2} d={makePath(points)} />
    </Svg>
  );
};
