import React, { useState, useEffect } from 'react';
import { StyleSheet, RefreshControl, View } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { BgTint } from '../ui/BgTint';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../common/colors';

export interface ISettingsScreenParams {}

export const HomeScreen: React.FC<NavigationSwitchScreenProps<ISettingsScreenParams>> = props => {
  const { navigation } = props;
  const [refreshing, setRefreshing] = useState(false);

  return (
    <BgTint>
      <ScrollView style={styles.root}>
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setTimeout(() => {
              setRefreshing(false);
            }, 2000);
          }}
          progressBackgroundColor={COLORS.TEXT_FADED.toString()}
        />
        <View></View>
      </ScrollView>
    </BgTint>
  );
};

const styles = StyleSheet.create({
  root: {},
});
