import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { PADDING } from '../../common/constants';
import { COLORS } from '../../common/colors';
import { STYLES } from '../../common/styles';

interface IProps {}

export const Header: React.FC<IProps> = props => {
  const {} = props;

  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.icon}>
        <Icon name='arrowleft' size={22} color={COLORS.ACCENT.toString()} />
      </TouchableOpacity>

      <Text style={STYLES.H2}>Header</Text>
      <Text style={STYLES.FADED_TEXT}>Subheader</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: PADDING.LARGE,
    paddingTop: PADDING.SMALL,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    left: PADDING.LARGE,
    top: 14,
    position: 'absolute',
  },
});
