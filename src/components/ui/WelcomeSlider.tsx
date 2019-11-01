import React, { useCallback, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions, ImageRequireSource } from 'react-native';
import { PADDING } from '../../common/constants';
import { STYLES } from '../../common/styles';
import { COLORS } from '../../common/colors';

interface IProps {
  onSlideChanged: (index: number, isLastSlide: boolean) => void;
}

interface IData {
  id: number;
  title: string;
  subtitle: string;
  image: ImageRequireSource;
}

export interface IWelcomeSliderHandlers {
  nextItem: () => void;
  scrollToEnd: () => void;
}

const DATA: IData[] = [
  {
    id: 1,
    title: 'Analyze your\npersonal budget',
    subtitle: 'Get powerful tools\nto see what you sending on',
    image: require('../../assets/images/pictures/welcome-1.png'),
  },
  {
    id: 2,
    title: 'Set your targets\nand accumulate money',
    subtitle: 'Challenge yourself to accrue\nmuch enough for your dreams',
    image: require('../../assets/images/pictures/welcome-2.png'),
  },
  {
    id: 3,
    title: 'Achieve results\nwith minimal effort',
    subtitle: 'See what`s happening with\nyour balance and change habits',
    image: require('../../assets/images/pictures/welcome-3.png'),
  },
  {
    id: 4,
    title: 'Get your\nfinancial wellness',
    subtitle: 'Find out what you dreaming\nof last years becomes true',
    image: require('../../assets/images/pictures/welcome-4.png'),
  },
  {
    id: 5,
    title: 'Track and share\nyour results',
    subtitle: 'You can share your account\nwith your family members',
    image: require('../../assets/images/pictures/welcome-5.png'),
  },
];

const { width, height } = Dimensions.get('window');

export const WelcomeSlider = forwardRef<IWelcomeSliderHandlers | undefined, IProps>((props, ref) => {
  const { onSlideChanged } = props;
  const lastIndex = DATA.length - 1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatList = useRef<FlatList<IData>>(null);
  const onViewableItemsChanged = useCallback(event => {
    if (event.viewableItems.length === 1) {
      const { index } = event.viewableItems[0];
      setCurrentIndex(index);
      onSlideChanged(index, index === lastIndex);
    }
  }, []);

  const scrollToEnd = () => {
    if (flatList.current) {
      flatList.current.scrollToIndex({
        animated: true,
        index: lastIndex,
      });
    }
  };

  const nextItem = () => {
    if (currentIndex === lastIndex) {
      return;
    }

    const index = currentIndex + 1;

    if (flatList.current) {
      flatList.current.scrollToIndex({
        animated: true,
        index,
      });
    }
  };

  useImperativeHandle(ref, () => ({
    nextItem,
    scrollToEnd,
  }));

  return (
    <View style={styles.root}>
      <FlatList<IData>
        ref={flatList}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={item => item.id.toString()}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <View style={styles.imageWrapper}>
                <View style={styles.imageHolder}>
                  <Image style={styles.itemImage} resizeMode='contain' source={item.image} />
                </View>
              </View>
              <Text style={[STYLES.H1, styles.title]}>{item.title}</Text>
              <Text style={[STYLES.H3, styles.subtitle]}>{item.subtitle}</Text>
            </View>
          );
        }}
      />

      <View style={styles.paginator}>
        {DATA.map((item, index) => {
          return <View key={index} style={[styles.page, index === currentIndex ? styles.pageActive : null]} />;
        })}
      </View>
    </View>
  );
});

const imageSize = height / 3.5;

const styles = StyleSheet.create({
  root: {
    width,
    paddingVertical: PADDING.LARGE,
  },

  item: {
    width,
    paddingHorizontal: PADDING.LARGE,
    marginBottom: PADDING.LARGE,
    justifyContent: 'center',
  },

  imageWrapper: {
    alignItems: 'center',
    height: imageSize,
  },

  imageHolder: {
    height: imageSize,
    width: imageSize,
    overflow: 'hidden',
    borderRadius: imageSize / 2,
    backgroundColor: COLORS.BG_CONTRAST.toString(),
  },

  itemImage: {
    width: imageSize,
    height: imageSize,
  },

  paginator: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  title: {
    textAlign: 'center',
    marginTop: PADDING.MEDIUM,
  },

  subtitle: {
    textAlign: 'center',
    marginTop: PADDING.REGULAR,
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
