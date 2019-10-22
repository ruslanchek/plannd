import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { COLORS } from '../../common/colors';
import { ERoutes } from '../../common/routes';
import { NavigationTabProp } from 'react-navigation-tabs/lib/typescript/src/types';
import { TabBarIcon } from './TabBarIcon';
import { TabBarLabel } from './TabBarLabel';

interface IProps {
  routeName: ERoutes;
  navigation: NavigationTabProp;
}

export const TabBarItem = React.memo((props: IProps) => {
  const { routeName, navigation } = props;
  const focused = navigation.state.routes[navigation.state.index].routeName === routeName;
  const color = (focused ? COLORS.ACCENT : COLORS.TEXT_FADED).toString();

  console.log(navigation.state);

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(routeName)}>
      <View style={styles.root}>
        <TabBarIcon tintColor={color} routeName={routeName} />
        <TabBarLabel tintColor={color} routeName={routeName} />
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  root: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
