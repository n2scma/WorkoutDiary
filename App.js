import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WorkoutProvider } from './components/contexts';
import { SettingsProvider } from './components/SettingsContexts';
import { MyTheme } from './Styles/Style';
import {  MD3LightTheme, DefaultTheme, PaperProvider } from 'react-native-paper';
import { Icon } from 'react-native-paper';

import HomeScreen from './components/HomeScreen';
import WorkoutScreen from './components/Workouts';
import SettingsScreen from './components/Settings';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <WorkoutProvider>
      <SettingsProvider>
        <PaperProvider theme={{ ...DefaultTheme, ...MyTheme }}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name="Home"
                options={{tabBarIcon:({color}) => <Icon color={color}source='account'size={24}/>}}
                component={HomeScreen}
              />
              <Tab.Screen
               name="Workouts"
               options={{tabBarIcon:({color}) => <Icon color={color}source='account-details'size={24}/>}}
               component={WorkoutScreen}
              />
              <Tab.Screen
                name="Settings"
                options={{tabBarIcon:({color}) => <Icon color={color}source='account-cog'size={24}/>}}
                component={SettingsScreen}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SettingsProvider>
    </WorkoutProvider>
  );
}

export default App;
