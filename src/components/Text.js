import React from 'react';
import { Text as RText, StyleSheet } from 'react-native';
import { fontSize, colors } from '../theme';
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/slices/app.slice';

export default function Text({
  children,
  size = 'normal',
  bold = false,
  color,
  buttonText,
  testID,
  style,
}) {
  const currentTheme = useSelector(selectTheme);
  const defaultColor = color
    ? color
    : buttonText
    ? colors[currentTheme].buttonText
    : colors[currentTheme].text;

  const styles = StyleSheet.create({
    main: {
      fontFamily: bold ? 'Montserrat-Bold' : 'Montserrat-Regular',
      fontSize: fontSize[size],
      color: defaultColor,
    },
  });

  return (
    <RText testID={testID} style={[styles.main, style]}>
      {children}
    </RText>
  );
}
