import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { COLORS } from '../../common/colors';
import { ELEMENT_SIZES, FONT_FAMILY, FONT_SIZES, SHADOWS } from '../../common/constants';

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

  return (
    <View style={styles.root}>
      {tabs.map(tab => (
        <TouchableHighlight
          onPress={() => {
            onSelect(tab.id);
          }}
          underlayColor={COLORS.ACCENT.alpha(0.1).toString()}
          style={[styles.button, currentId ? styles.buttonSelected : null]}
          key={tab.id}>
          <Text style={styles.text}>{tab.text}</Text>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    ...SHADOWS.ELEVATION_1,
  },

  button: {
    height: ELEMENT_SIZES.BUTTON_HEIGHT,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonSelected: {},

  text: {
    fontSize: FONT_SIZES.MEDIUM,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
