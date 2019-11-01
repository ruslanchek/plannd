import { useMemo } from 'react';
import { Dimensions } from 'react-native';
import { getInset } from 'react-native-safe-area-view';

interface IScreenSize {
  width: number;
  height: number;
  safeWidth: number;
  safeHeight: number;
  paddingBottom: number;
  paddingTop: number;
  paddingLeft: number;
  paddingRight: number;
  isLandscape: boolean;
}

export const useScreenSizes = (): IScreenSize => {
  return useMemo(() => {
    const { height, width } = Dimensions.get('window');
    const isLandscape: boolean = height < width;
    const paddingBottom = getInset('bottom', isLandscape);
    const paddingTop = getInset('top', isLandscape);
    const paddingLeft = getInset('left', isLandscape);
    const paddingRight = getInset('right', isLandscape);

    return {
      width,
      height,
      safeWidth: width - paddingLeft - paddingRight,
      safeHeight: height - paddingTop - paddingBottom,
      paddingBottom,
      paddingTop,
      paddingLeft,
      paddingRight,
      isLandscape,
    };
  }, []);
};
