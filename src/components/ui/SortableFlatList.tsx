import React, { useState } from "react";
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

export const SortableFlatList: React.FC<IProps> = props => {
  const width = 320;
  const height = 320;

  const [draggingIndex, setDraggingIndex] = useState(-1);

  return (
    <View style={styles.root}>
      <View
        style={{
          width,
          height
        }}
      >
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.row}>
                <Text>{item.title}</Text>
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
    backgroundColor: "#eee"
  },

  row: {
    padding: 20,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  }
});
