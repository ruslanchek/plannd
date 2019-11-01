import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { COLORS } from '../../common/colors';
import { ELEMENT_SIZES, FONT_FAMILY, FONT_SIZES } from '../../common/constants';
import { SHADOWS, STYLES } from '../../common/styles';

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
      {tabs.map(tab => {
        const isCurrent = currentId === tab.id;
        return (
          <TouchableHighlight
            onPress={() => {
              onSelect(tab.id);
            }}
            underlayColor={COLORS.ACCENT.alpha(0.1).toString()}
            style={[styles.button, isCurrent ? styles.buttonSelected : styles.buttonIdle]}
            key={tab.id}>
            <Text style={[styles.text, isCurrent ? styles.textSelected : styles.textIdle]}>{tab.text}</Text>
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    backgroundColor: COLORS.BG.toString(),
    ...SHADOWS.ELEVATION_2,
  },

  button: {
    height: ELEMENT_SIZES.TAB_HEIGHT,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
  },

  buttonSelected: {
    borderBottomColor: COLORS.ACCENT.toString(),
  },

  buttonIdle: {
    borderBottomColor: COLORS.ACCENT.alpha(0).toString(),
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
