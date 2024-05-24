import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = ({
  type = 'solid',
  color = '#000', // Color por defecto negro
  thickness = 1,
  length = '100%',
  style,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 8,
    },
    solid: {
      borderBottomWidth: thickness,
      borderBottomColor: color,
      width: length,
    },
    dashed: {
      borderBottomWidth: thickness,
      borderBottomColor: color,
      borderStyle: 'dashed',
      width: length,
    },
  });

  const separatorStyle = type === 'dashed' ? styles.dashed : styles.solid;

  return (
    <View style={styles.container}>
      <View style={[separatorStyle, style]} />
    </View>
  );
};

export default Separator;
