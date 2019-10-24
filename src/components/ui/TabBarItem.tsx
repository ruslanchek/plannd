import React, { useCallback } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { COLORS } from '../../common/colors';
import { ERoutes } from '../../common/routes';
import { NavigationTabProp } from 'react-navigation-tabs/lib/typescript/src/types';
import { TabBarIcon } from './TabBarIcon';
import { TabBarLabel } from './TabBarLabel';

interface IProps {
  routeName: ERoutes;
  navigation: NavigationTabProp;
  onPress: (routeName: ERoutes) => void;
}

export const TabBarItem = React.memo((props: IProps) => {
  const { routeName, navigation, onPress } = props;
  const focused = navigation.state.routes[navigation.state.index].routeName === routeName;
  const color = (focused ? COLORS.ACCENT : COLORS.TEXT_FADED).toString();
  const handleOnPress = useCallback(() => {
    onPress(routeName);
  }, [routeName]);

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
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
