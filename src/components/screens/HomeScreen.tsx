import React, { useState } from 'react';
import { StyleSheet, RefreshControl } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { BgTint } from '../ui/BgTint';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../common/colors';
import { TotalBalance } from '../ui/TotalBalance';
import { ContainerPadding } from '../ui/ContainerPadding';
import { AccountCard } from '../ui/AccountCard';
import { Row } from '../ui/Row';
import { Col } from '../ui/Col';

export interface IHomeScreenParams {}

export const HomeScreen: React.FC<NavigationSwitchScreenProps<IHomeScreenParams>> = props => {
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
        <Row>
          <Col>
            <ContainerPadding>
              <TotalBalance />
            </ContainerPadding>
          </Col>
        </Row>
        <Row>
          <Col>
            <ContainerPadding>
              <AccountCard />
            </ContainerPadding>
          </Col>
        </Row>
      </ScrollView>
    </BgTint>
  );
};

const styles = StyleSheet.create({
  root: {},
});
