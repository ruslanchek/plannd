import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface IProps {
  onPress: () => void;
}

export const Back: React.FC<IProps> = props => {
  const { onPress } = props;

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});
