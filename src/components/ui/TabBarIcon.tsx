import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../common/colors';
import { ERoutes } from '../../common/routes';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ELEMENT_SIZES } from '../../common/constants';

interface IProps {
  routeName: string;
  tintColor: string;
}

const ICON_NAMES = {
  [ERoutes.HomeScreen]: 'wallet',
  [ERoutes.TransactionsScreen]: 'clipboard-list',
  [ERoutes.TargetsScreen]: 'bullseye',
  [ERoutes.StatisticsScreen]: 'signal',
  [ERoutes.SettingsScreen]: 'cog',
};

export const TabBarIcon: React.FC<IProps> = props => {
  const { tintColor, routeName } = props;

  return (
    <View style={styles.root}>
      <Icon name={ICON_NAMES[routeName]} size={ELEMENT_SIZES.TAB_BAR_ICON_SIZE} color={tintColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: ELEMENT_SIZES.TAB_BAR_ICON_SIZE,
    height: ELEMENT_SIZES.TAB_BAR_ICON_SIZE,
  },
});
