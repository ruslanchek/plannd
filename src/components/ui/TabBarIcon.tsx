import React from 'react';
import { ERoutes } from '../../common/routes';
import { ELEMENT_SIZES } from '../../common/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';

interface IProps {
  routeName: ERoutes;
  tintColor: string;
}

const ICON_NAMES: { [key: string]: string } = {
  [ERoutes.HomeScreen]: 'ios-albums',
  [ERoutes.HistoryScreen]: 'ios-book',
  [ERoutes.TargetsScreen]: 'ios-planet',
  [ERoutes.StatisticsScreen]: 'signal',
  [ERoutes.SettingsScreen]: 'ios-finger-print',
};

const ICON_SIZE_RATIOS: { [key: string]: number } = {
  [ERoutes.HomeScreen]: 1,
  [ERoutes.HistoryScreen]: 1.1,
  [ERoutes.TargetsScreen]: 1.4,
  [ERoutes.StatisticsScreen]: 1,
  [ERoutes.SettingsScreen]: 1.1,
};

const ICON_SIZE_OFFSET_VERTICAL: { [key: string]: number } = {
  [ERoutes.HomeScreen]: 0,
  [ERoutes.HistoryScreen]: 0,
  [ERoutes.TargetsScreen]: -4,
  [ERoutes.StatisticsScreen]: 0,
  [ERoutes.SettingsScreen]: 0,
};

export const TabBarIcon: React.FC<IProps> = props => {
  const { tintColor, routeName } = props;

  return (
    <View style={styles.root}>
      <Icon
        style={{
          top: ICON_SIZE_OFFSET_VERTICAL[routeName],
        }}
        name={ICON_NAMES[routeName]}
        size={ELEMENT_SIZES.TAB_BAR_ICON_SIZE * ICON_SIZE_RATIOS[routeName]}
        color={tintColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 30,
  },
});
