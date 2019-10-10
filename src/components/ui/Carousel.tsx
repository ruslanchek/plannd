import React, { useState, useRef, useMemo } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

interface IProps {}

interface IData {
  id: string;
  title: string;
}

const DATA: IData[] = [
  { id: "1", title: "wqewqeqwe asd" },
  { id: "2", title: "wqewqeqwe asdasd" },
  { id: "3", title: "wqewqeqwea s" },
  { id: "4", title: "wqewqeqwe asdas" },
  { id: "5", title: "wqewqeqwea sd" },
  { id: "6", title: "wqewqeqwea sdas" },
  { id: "7", title: "wqewqeqweasd asd" }
];

function getByIndex(array: any[], index: number, count: number): any[] {
  if (index === 0) {
    return array.slice(0, count);
  }

  const { length } = array;
  let start = index - Math.floor(count / 2);
  let end = index + Math.ceil(count / 2);

  if (start < 0) {
    start = 0;
  }

  if (start > length - 1 - count) {
    start = length - 1 - count;
  }

  if (end > length - 1) {
    end = length - 1;
  }

  if (end < start - count) {
    end = start - count;
  }

  return array.slice(start, end);
}

export const Carousel: React.FC<IProps> = props => {
  const width = 320;
  const height = 320;
  const currentIndex = useRef<number>(0);
  const direction = useRef<number>(0);
  const currentVirtualIndex = useRef<number>(0);
  const flatList = useRef<FlatList<any> | null>(null);
  const [data, setData] = useState<IData[]>(getByIndex(DATA, 0, 3));
  const onViewableItemsChanged = useRef(({ viewableItems, changed }) => {
    direction.current = 0;

    if (viewableItems[0].index > changed[0].index) {
      direction.current = -1;
    }

    if (viewableItems[0].index < changed[0].index) {
      direction.current = 1;
    }
  });

  return (
    <View style={styles.root}>
      <View>
        <Text>Current index: {currentIndex.current}</Text>
        <Text>Current virtualIndex: {currentVirtualIndex.current}</Text>
        {data[0] && <Text>data[0].ID: {data[0].id}</Text>}
        {data[1] && <Text>data[1].ID: {data[1].id}</Text>}
        {data[2] && <Text>data[2].ID: {data[2].id}</Text>}
      </View>
      <View
        style={{
          width,
          height
        }}
      >
        <FlatList
          ref={flatList}
          scrollEventThrottle={10}
          data={data}
          canCancelContentTouches
          onViewableItemsChanged={onViewableItemsChanged.current}
          horizontal
          pagingEnabled
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          extraData={currentIndex}
          onMomentumScrollEnd={event => {
            if (direction.current === 1) {
              currentVirtualIndex.current++;
            } else if (direction.current === -1) {
              currentVirtualIndex.current--;
            } else {
              return;
            }

            if (currentVirtualIndex.current < 0) {
              currentVirtualIndex.current = 0;
            }

            if (currentVirtualIndex.current > DATA.length - 1) {
              currentVirtualIndex.current = DATA.length - 1;
            }

            setData(getByIndex(DATA, currentVirtualIndex.current, 3));

            flatList.current.scrollToIndex({
              animated: false,
              index: 1
            });
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            return (
              <View
                style={[
                  styles.row,
                  {
                    width,
                    height
                  }
                ]}
              >
                <Text>Index: {index}</Text>
                <Text>ID: {item.id}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ccc"
  },

  row: {
    padding: 20,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ddd"
  }
});
