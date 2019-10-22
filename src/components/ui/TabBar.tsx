import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, TouchableHighlight, Animated } from 'react-native';
import { ELEMENT_SIZES, BORDER_RADIUS, SHADOWS } from '../../common/constants';
import { COLORS } from '../../common/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BottomTabBarProps } from 'react-navigation-tabs/lib/typescript/src/types';
import { getInset } from 'react-native-safe-area-view';
import { ERoutes } from '../../common/routes';
import { TabBarItem } from './TabBarItem';

export const TabBar: React.FC<BottomTabBarProps> = props => {
  const { navigation } = props;
  const animatedPlusValue = useRef(new Animated.Value(0));

  useEffect(() => {
    const animatedPlusRoute =
      navigation.state.routes[navigation.state.index].routeName === ERoutes.AddTransactionModal;

    Animated.spring(animatedPlusValue.current, {
      toValue: animatedPlusRoute ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [props.navigation.state]);

  return (
    <View style={styles.root}>
      <View style={styles.bar}>
        <TabBarItem routeName={ERoutes.HomeScreen} navigation={props.navigation} />
        <TabBarItem routeName={ERoutes.TransactionsScreen} navigation={props.navigation} />

        <View style={styles.center}>
          <TouchableHighlight
            onPress={() => navigation.navigate(ERoutes.AddTransactionModal)}
            underlayColor={COLORS.ACCENT.darken(0.2).toString()}
            style={styles.plus}>
            <Animated.View
              style={{
                transform: [
                  {
                    rotateZ: animatedPlusValue.current.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '45deg'],
                    }),
                  },
                ],
              }}>
              <Icon name='plus' size={30} color={COLORS.WHITE.toString()} />
            </Animated.View>
          </TouchableHighlight>
        </View>

        <TabBarItem routeName={ERoutes.TargetsScreen} navigation={props.navigation} />
        <TabBarItem routeName={ERoutes.SettingsScreen} navigation={props.navigation} />
      </View>
    </View>
  );
};

const bottomInset = getInset('bottom', false);

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.TINT_BG.toString(),
  },

  bar: {
    paddingBottom: bottomInset,
    height: ELEMENT_SIZES.TAB_BAR_HEIGHT + bottomInset,
    paddingTop: 4,
    borderTopWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.ELEMENT_BG.toString(),
    borderTopStartRadius: BORDER_RADIUS.LARGE,
    borderTopEndRadius: BORDER_RADIUS.LARGE,
    ...SHADOWS.ELEVATION_1_REVERSED,
  },

  plus: {
    backgroundColor: COLORS.ACCENT.toString(),
    borderRadius: 24,
    width: 48,
    height: 48,
    top: -2,
    ...SHADOWS.ELEVATION_2,
    shadowColor: COLORS.ACCENT.toString(),
    shadowOpacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  center: {
    flex: 0.175,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
