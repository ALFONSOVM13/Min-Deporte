import React from 'react';
import { Text, TextInput, View, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/slices/app.slice'; 
import { generalStyle } from '../styles/generalStyle';

const Input = ({
  title,
  editable,
  value,
  onChangeText,
  placeholderText, 
  componentStyle,
  inputTextColor,
  inputBackgroundColor,
  keyboardType,
  secureTextEntry,
  iconComponent
}) => {
  const currentTheme = useSelector(selectTheme); 
  const textColor = inputTextColor || (currentTheme === 'dark' ? '#fff' : '#000');
  const backgroundColor = inputBackgroundColor || (currentTheme === 'dark' ? '#333' : '#F3F3F3');

  return (
    <View style={[generalStyle.generalInputContainer, componentStyle]}>
      <Text style={[generalStyle.generalInputTitle, {color: textColor}]}>{title}</Text>
      <View style={[generalStyle.generalInputContent, (!editable ? generalStyle.generalInputContainerDisabled : ''), styles.inputWithIcon, {backgroundColor}]}>
        {iconComponent}
        <TextInput
          style={[generalStyle.generalInput, styles.inputField, {color: textColor}]}
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
