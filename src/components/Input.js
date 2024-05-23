import React from 'react';
import { Text, TextInput, View, StyleSheet } from "react-native";
import { generalStyle } from '../styles/generalStyle'; // ¿Dónde se define generalStyle?

const Input = ({
  title,
  editable,
  value,
  onChangeText,
  placeholderText, 
  componentStyle,
  keyboardType,
  secureTextEntry,
  iconComponent
}) => {
  return (
    <View style={[generalStyle.generalInputContainer, componentStyle]}>
      <Text style={generalStyle.generalInputTitle}>{title}</Text>
      <View style={[generalStyle.generalInputContent, (!editable ? generalStyle.generalInputContainerDisabled : ''), styles.inputWithIcon]}>
        {iconComponent}
        <TextInput
          style={[generalStyle.generalInput, styles.inputField]}
          value={value}
          editable={editable}
          placeholder={placeholderText} 
          placeholderTextColor={'#000'}
          onChangeText={(text) => onChangeText(text)}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

// Propiedades por defecto
Input.defaultProps = {
  componentStyle: {},
  keyboardType: 'default',
  secureTextEntry: false,
  editable: true,
  iconComponent: null
};

const styles = StyleSheet.create({
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputField: {
    flex: 1,
  }
});

export default Input;
