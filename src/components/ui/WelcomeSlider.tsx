import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ImageRequireSource,
} from 'react-native';
import { PADDING } from '../../common/constants';
import { STYLES } from '../../common/styles';
import { Row } from './Row';
import { Col } from './Col';
import { COLORS } from '../../common/colors';

interface IData {
  id: number;
  title: string;
  image: ImageRequireSource;
}

const DATA: IData[] = [
  {
    id: 1,
    title: 'Analyze your personal budget',
    image: require('../../assets/welcome-1.png'),
  },
  {
    id: 2,
    title: 'Set your targets and accumulate money',
    image: require('../../assets/welcome-2.png'),
  },
  {
    id: 3,
    title: 'Acheive results with no effort',
    image: require('../../assets/welcome-3.png'),
  },
  {
    id: 4,
    title: 'Get your finacial wellness',
    image: require('../../assets/welcome-4.png'),
  },
  {
    id: 5,
    title: 'Track and share your results',
    image: require('../../assets/welcome-5.png'),
  },
];

const { width } = Dimensions.get('window');

export const WelcomeSlider: React.FC = props => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length === 1) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  return (
    <View style={styles.root}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={item => item.id.toString()}
        onViewableItemsChanged={onViewableItemsChanged.current}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.item}>
              <Text style={STYLES.H1}>{item.title}</Text>
              <Image style={styles.itemImage} resizeMode='contain' source={item.image} />
            </View>
          );
        }}
      />
      <View style={styles.paginator}>
        {DATA.map((item, index) => {
          return (
            <View
              key={index}
              style={[styles.page, index === currentIndex ? styles.pageActive : null]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width,
  },

  item: {
    width,
    paddingHorizontal: PADDING.MEDUIM,
  },

  itemImage: {
    width: width - PADDING.MEDUIM * 2,
    height: width - PADDING.MEDUIM * 6,
    marginVertical: PADDING.MEDUIM,
  },

  paginator: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  page: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.ACCENT.alpha(0.2).toString(),
    marginHorizontal: 3,
  },

  pageActive: {
    backgroundColor: COLORS.ACCENT.alpha(1).toString(),
  },
});