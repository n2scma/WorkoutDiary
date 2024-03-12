import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSettings } from '../components/SettingsContexts';

function SettingsScreen() {
  const { updateDistanceUnit } = useSettings();

  return (
    <View>
      <Text>Settings</Text>
      <Button title="Set to Kilometers" onPress={() => updateDistanceUnit('kilometers')} />
      <Button title="Set to Miles" onPress={() => updateDistanceUnit('miles')} />
    </View>
  );
}

export default SettingsScreen;
