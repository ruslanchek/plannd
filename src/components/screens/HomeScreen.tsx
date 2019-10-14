import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { authHandleLogOut, getUid } from '../../helpers/authHelpers';
import { BgTint } from '../ui/BgTint';

export interface ISettingsScreenParams {}

export const HomeScreen: React.FC<NavigationSwitchScreenProps<ISettingsScreenParams>> = props => {
  const { navigation } = props;
  const [uid, setUid] = useState('Fetching...');

  useEffect(() => {
    (async () => {
      setUid(await getUid());
    })();
  }, []);

  return (
    <BgTint>
      <View style={styles.root}>
        <Text>HomeScreen</Text>
        <Button title='Logout' onPress={() => authHandleLogOut(navigation)}></Button>
        <Text>UID: {uid}</Text>
      </View>
    </BgTint>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
