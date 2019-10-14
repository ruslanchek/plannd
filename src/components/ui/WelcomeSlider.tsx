import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
import { PADDING } from '../../common/constants';
import { STYLES } from '../../common/styles';

interface IData {
  id: number;
  title: string;
  image: string;
}

const DATA: IData[] = [
  {
    id: 1,
    title: 'Header 1',
    image: require('../../assets/welcome-1.png'),
  },
  {
    id: 2,
    title: 'Header 2',
    image: require('../../assets/welcome-2.png'),
  },
  {
    id: 3,
    title: 'Header 3',
    image: require('../../assets/welcome-3.png'),
  },
  {
    id: 4,
    title: 'Header 4',
    image: require('../../assets/welcome-4.png'),
  },
  {
    id: 5,
    title: 'Header 5',
    image: require('../../assets/welcome-5.png'),
  },
];

const { width } = Dimensions.get('window');

export const WelcomeSlider: React.FC = props => {
  const { children } = props;

  return (
    <FlatList
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      data={DATA}
      style={styles.root}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.item}>
            <Text style={STYLES.H1}>{item.title}</Text>
            <Image source={{ uri: item.image }} />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    width,
  },

  item: {
    width,
    height: width,
  },

  itemText: {},

  itemImage: {
    width,
    height: width,
  },
});
