import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Animated } from 'react-native';
import { COLORS } from '../../common/colors';
import { ELEMENT_SIZES, FONT_FAMILY, FONT_SIZES } from '../../common/constants';
import { SHADOWS, STYLES } from '../../common/styles';
import { useScreenSizes } from '../../hooks/useScreenSizes';

interface ITab {
  id: number;
  text: string;
}

interface IProps {
  tabs: ITab[];
  currentId: number;
  onSelect: (id: number) => void;
}

export const Tabs: React.FC<IProps> = props => {
  const { tabs, currentId, onSelect } = props;
  const positionIndex = tabs.findIndex(tab => tab.id === currentId);
  const [animated] = useState(new Animated.Value(positionIndex));
  const { width } = useScreenSizes();
  const indicatorWidth = width / tabs.length;

  useEffect(() => {
    Animated.spring(animated, {
      toValue: positionIndex,
      useNativeDriver: true,
      speed: 100,
    }).start();
  }, [positionIndex]);

  return (
    <View style={styles.root}>
      {tabs.map(tab => {
        const isCurrent = currentId === tab.id;
        return (
          <TouchableHighlight
            onPress={() => {
              onSelect(tab.id);
            }}
            underlayColor={COLORS.ACCENT.alpha(0.1).toString()}
            style={styles.button}
            key={tab.id}>
            <Text style={[styles.text, isCurrent ? styles.textSelected : styles.textIdle]}>{tab.text}</Text>
          </TouchableHighlight>
        );
      })}
      <Animated.View
        style={[
          styles.indicator,
          {
            width: indicatorWidth,
            transform: [
              {
                translateX: animated.interpolate({
                  inputRange: [0, tabs.length],
                  outputRange: [0, width],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: COLORS.BG.toString(),
    ...SHADOWS.ELEVATION_2,
  },

  button: {
    height: ELEMENT_SIZES.TAB_HEIGHT,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  indicator: {
    height: 3,
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: COLORS.ACCENT.toString(),
  },

  text: {
    fontSize: FONT_SIZES.MEDIUM,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
  },

  textSelected: {
    color: COLORS.TEXT.toString(),
  },

  textIdle: {
    color: COLORS.TEXT_FADED.toString(),
  },
});
