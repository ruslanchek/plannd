import React, { useContext, useMemo, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Animated, ScrollView } from 'react-native';
import { AddTransactionModalContext } from './AddTransactionModalProvider';
import { getInset } from 'react-native-safe-area-view';
import { COLORS } from '../../common/colors';

export const AddTransactionModal: React.FC = () => {
  const { show } = useContext(AddTransactionModalContext);
  const [animated] = useState(new Animated.Value(0));
  const positioningStyles = useMemo(() => {
    const { width, height } = Dimensions.get('window');
    const paddingBottom = getInset('bottom', false);
    const paddingTop = getInset('top', false);
    const offsetTop = 12;
    const offsetBottom = 30;
    const viewHeight = height - paddingBottom - paddingTop + offsetBottom;
    const top = -viewHeight + offsetTop + offsetBottom;

    return {
      top,
      width,
      height: viewHeight,
      paddingBottom: offsetTop + offsetBottom,
      paddingTop,
    };
  }, [show]);

  useEffect(() => {
    Animated.spring(animated, {
      toValue: show ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [show]);

  return (
    <Animated.View
      style={[
        styles.root,
        positioningStyles,
        {
          opacity: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 1],
          }),
          transform: [
            {
              translateY: animated.interpolate({
                inputRange: [0, 1],
                outputRange: [positioningStyles.height, 0],
              }),
            },
          ],
        },
      ]}>
      <View style={styles.inner}>
        <ScrollView>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
          <Text>dsajdlasjdkasjkdlj</Text>
        </ScrollView>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    backgroundColor: COLORS.BG_CONTRAST.toString(),
    bottom: 0,
    left: 0,
  },

  inner: {
    flex: 1,
  },
});
