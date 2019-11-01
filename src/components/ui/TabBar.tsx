import React, { useRef, useEffect, useContext, useCallback } from 'react';
import { StyleSheet, View, TouchableHighlight, Animated } from 'react-native';
import { ELEMENT_SIZES, BORDER_RADIUS } from '../../common/constants';
import { COLORS } from '../../common/colors';
import { SHADOWS } from '../../common/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BottomTabBarProps } from 'react-navigation-tabs/lib/typescript/src/types';
import { getInset } from 'react-native-safe-area-view';
import { ERoutes } from '../../common/routes';
import { TabBarItem } from './TabBarItem';
import { AddTransactionModalContext } from '../modals/AddTransactionModalProvider';
import { AddTransactionModal } from '../modals/AddTransactionModal';

export const TabBar: React.FC<BottomTabBarProps> = props => {
  const { navigation } = props;
  const animatedPlusValue = useRef(new Animated.Value(0));
  const { show: showAddTransactionModal, setShow: setShowAddTransactionModal } = useContext(AddTransactionModalContext);

  useEffect(() => {
    Animated.spring(animatedPlusValue.current, {
      toValue: showAddTransactionModal ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [showAddTransactionModal]);

  const handleAdd = useCallback(() => {
    setShowAddTransactionModal(!showAddTransactionModal);
  }, [showAddTransactionModal]);

  const handleOnRoutePress = useCallback(
    (routeName: ERoutes) => {
      navigation.navigate(routeName);
    },
    [navigation],
  );

  return (
    <View style={styles.root}>
      <AddTransactionModal />
      <View style={styles.bar}>
        <TabBarItem routeName={ERoutes.HomeScreen} navigation={navigation} onPress={handleOnRoutePress} />
        <TabBarItem routeName={ERoutes.HistoryScreen} navigation={navigation} onPress={handleOnRoutePress} />

        <View style={styles.center}>
          <View style={styles.plusUnderlay} />
          <TouchableHighlight
            onPress={handleAdd}
            underlayColor={COLORS.ACCENT.darken(0.2).toString()}
            style={styles.plus}>
            <Animated.View
              style={{
                transform: [
                  {
                    rotateZ: animatedPlusValue.current.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '135deg'],
                    }),
                  },
                ],
              }}>
              <Icon name='plus' size={30} color={COLORS.BG_CONTRAST.toString()} />
            </Animated.View>
          </TouchableHighlight>
        </View>

        <TabBarItem routeName={ERoutes.TargetsScreen} navigation={props.navigation} onPress={handleOnRoutePress} />
        <TabBarItem routeName={ERoutes.SettingsScreen} navigation={props.navigation} onPress={handleOnRoutePress} />
      </View>
    </View>
  );
};

const bottomInset = getInset('bottom', false);

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.BG.toString(),
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
    justifyContent: 'center',
    alignItems: 'center',
    top: -15,
  },

  plusUnderlay: {
    backgroundColor: COLORS.BG_CONTRAST.toString(),
    borderRadius: 30,
    width: 60,
    height: 60,
    top: -21,
    position: 'absolute',
    ...SHADOWS.ELEVATION_1_REVERSED,
  },

  center: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
