import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../../common/colors';
import { localizeText } from '../../helpers/localeHelpers';
import { PADDING } from '../../common/constants';

export const SocialOr: React.FC = () => {
  return (
    <View style={styles.socialOr}>
      <View style={styles.socialOrLine} />
      <Text style={styles.socialOrText}>{localizeText('Social::Or')}</Text>
      <View style={styles.socialOrLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  socialOr: {
    marginVertical: PADDING.MEDUIM,
    flexDirection: 'row',
  },

  socialOrText: {
    color: COLORS.TEXT_FADED.toString(),
    paddingHorizontal: PADDING.SMALL,
  },

  socialOrLine: {
    height: 1,
    backgroundColor: COLORS.TEXT_FADED.alpha(0.2).toString(),
    flexGrow: 1,
    transform: [{ translateY: 9 }],
  },
});
