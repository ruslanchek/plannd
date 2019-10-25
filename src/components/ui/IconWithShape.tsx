import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from 'color';

interface IProps {
  shape: 'round' | 'square';
  color: Color;
  size: number;
  name: string;
}

const ICON_SIZE_RATIO = 0.5;
const BORDER_RADIUS_RATIO = 0.25;

export const IconWithShape = React.memo<IProps>(props => {
  const { shape, color, size, name } = props;
  const borderRadius = shape === 'round' ? size / 2 : size * BORDER_RADIUS_RATIO;
  const containerStyles: ViewStyle[] = [
    styles.container,
    {
      width: size,
      height: size,
      minWidth: size,
      minHeight: size,
      backgroundColor: color.alpha(0.2).toString(),
      borderRadius,
    },
  ];

  return (
    <View style={containerStyles}>
      <Icon color={color.toString()} name={name} size={size * ICON_SIZE_RATIO} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
