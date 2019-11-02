import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../common/colors';

export const NextButtonIcon: React.FC = props => {
  const {} = props;

  return (
    <View style={styles.root}>
      <Icon style={styles.icon} name='arrowright' size={22} color='#FFF' />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.ACCENT.darken(0.11).toString(),
  },

  icon: {
    transform: [{ translateY: 1 }],
  },
});
