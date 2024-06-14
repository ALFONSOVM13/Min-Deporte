import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView, Platform} from 'react-native';
import {colors} from '../theme';
import {useSelector} from 'react-redux';
import {selectTheme} from '../redux/slices/app.slice';
import Header from './layout/Header';

const {width, height} = Dimensions.get('window');

export default function Container({children, scroll, os = Platform.OS}) {
  const handleMenuToggle = () => setMenuVisible(!isMenuVisible);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const currentTheme = useSelector(selectTheme);
  const styles = StyleSheet.create({
    main: {
      width,
      paddingLeft: width * 0.02,
      paddingRight: width * 0.02,
      height,
      backgroundColor: colors[currentTheme].background,
      paddingTop: os === 'ios' ? 80 : 0,
    },
    scrollContainer: {
      height,
      paddingBottom: 140,
    },
  });
  if (scroll) {
    return (
      <View style={styles.main}>
        <Header
          handleMenuToggle={handleMenuToggle}
          isMenuVisible={isMenuVisible}
        />
        <View style={styles.scrollContainer}>
          <ScrollView bounces={false} overScrollMode="never">
            {children}
          </ScrollView>
        </View>
      </View>
    );
  }
  return (
    <>
      <Header
        handleMenuToggle={handleMenuToggle}
        isMenuVisible={isMenuVisible}
      />
      <View style={styles.main}>{children}</View>
    </>
  );
}
