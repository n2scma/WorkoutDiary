import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useWorkout } from '../components/contexts';
import Style from '../Styles/Style';
import { useSettings } from '../components/SettingsContexts';

function WorkoutScreen() {
  const { workouts } = useWorkout();
  const { distanceUnit } = useSettings();

  const displayDistance = (distance) => {
    if (distanceUnit === 'miles') {
      return (parseFloat(distance) * 0.621371).toFixed(2) + ' miles';
    }
    return distance + ' km';
  };

  return (
    <ScrollView contentContainerStyle={Style.scrollContainer}>
      <View style={Style.navview}>
        <Title style={Style.heading}>Workout History</Title>
        {workouts.map((workout, index) => (
          <Card key={index} style={Style.card}>
            <Card.Content>
              <View style={Style.workoutHeader}>
                {workout.iconName && (
                  <Icon name={workout.iconName} size={24} color="#333" />
                )}
                <Title>{`${workout.workoutType}`}</Title>
              </View>
              <Title>{`Distance: ${displayDistance(workout.distance)}`}</Title>
              <Title>{`Duration: ${workout.duration} minutes`}</Title>
              {workout.date && <Title>{`Date: ${workout.date}`}</Title>}
            </Card.Content>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

export default WorkoutScreen;
