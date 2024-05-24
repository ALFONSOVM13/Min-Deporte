import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/app/Home';
import AboutScreen from '../views/app/About';
import SettingsScreen from '../views/app/Settings';

import { colors } from '../theme';
import { selectTheme } from '../redux/slices/app.slice';
import Trajectory from '../views/app/Trajectory';
import Membership from '../views/app/Membership';

const Tab = createBottomTabNavigator();

function TabBarIcon({ focused, color, size, route }) {
  let iconName = '';

  if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'About') {
    iconName = focused ? 'help-circle' : 'help-circle-outline';
  } else if (route.name === 'Membership') {
    iconName = focused ? 'wallet-membership' : 'wallet-membership';
  } else if (route.name === 'MyCareer') {
    iconName = focused ? 'account-circle' : 'account-circle-outline';
  } else if (route.name === 'Clubs') {
    iconName = focused ? 'trophy' : 'trophy-outline';
  }

  return <Icon name={iconName} size={size} color={color} />;
}

function BottomNavigation() {
  const currentTheme = useSelector(selectTheme);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          TabBarIcon({
            focused,
            color,
            size,
            route,
          }),
        tabBarActiveTintColor: colors[currentTheme].active,
        tabBarInactiveTintColor: colors[currentTheme].inactive,
        tabBarActiveBackgroundColor: colors[currentTheme].background,
        tabBarInactiveBackgroundColor: colors[currentTheme].background,
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        options={{ tabBarLabel: 'Inicio' }}
        component={HomeScreen}
      />
      {/* <Tab.Screen
        name="About"
        options={{ tabBarLabel: 'Acerca de' }}
        component={AboutScreen}
      /> */}
      <Tab.Screen
        name="Membership"
        options={{ tabBarLabel: 'Membresía' }}
        component={Membership}
      />
      <Tab.Screen
        name="MyCareer"
        options={{ tabBarLabel: 'Mi Trayectoria' }}
        component={Trajectory}
      />
      <Tab.Screen
        name="Clubs"
        options={{ tabBarLabel: 'Clubes' }}
        component={AboutScreen}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeStack" component={BottomNavigation} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
