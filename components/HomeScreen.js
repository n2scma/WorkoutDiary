import React, { useState } from 'react';
import { View, TextInput, TouchableHighlight } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Icon, IconButton } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useWorkout } from '../components/contexts';
import { useSettings } from '../components/SettingsContexts';
import Style from '../Styles/Style';

function HomeScreen({ navigation }) {
    const { distanceUnit } = useSettings();
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [selectedWorkoutType, setSelectedWorkoutType] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [error, setError] = useState('');
  
    const { addWorkout } = useWorkout();
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleDateConfirm = (date) => {
      hideDatePicker();
      setSelectedDate(date);
    };

    const getIconNameForWorkout = (workoutType) => {
        switch (workoutType) {
          case 'Running':
            return 'run';
          case 'Skiing':
            return 'ski';
          case 'Swimming':
            return 'swim';
          default:
            return 'default-icon';
        }
      };
  
    const isWorkoutSelected = (workoutType) => {
      return selectedWorkoutType === workoutType;
    };
  
    const selectWorkoutType = (workoutType) => {
      setSelectedWorkoutType(workoutType);
    };

    const renderWorkoutButton = (workoutType, iconName, label) => {
        return (
          <TouchableHighlight
            underlayColor="lightblue"
            onPress={() => selectWorkoutType(workoutType)}
            style={[
              Style.buttonContainer,
              isWorkoutSelected(workoutType) && { backgroundColor: 'lightblue' },
            ]}
          >
            <>
              <IconButton
                icon={iconName}
                color={isWorkoutSelected(workoutType) ? 'white' : '#00CED1'}
                style={Style.buttonIcon}
              />
              <Text style={Style.buttonLabel}>{label}</Text>
            </>
          </TouchableHighlight>
        );
      };
  
      const addWorkoutEntry = () => {
        if (selectedWorkoutType) {
          if (!isValidNumber(distance) || !isValidNumber(duration)) {
            setError('Please enter valid numbers for distance and duration.');
            return;
          }
          addWorkout({
            workoutType: selectedWorkoutType,
            distance,
            duration,
            date: selectedDate.toISOString().split('T')[0],
            iconName: getIconNameForWorkout(selectedWorkoutType),
          });
      
          setDistance('');
          setDuration('');
          setSelectedWorkoutType('');
          setSelectedDate(new Date());
          setError('');
        }
      };

      const isValidNumber = (value) => {
        const numberValue = parseFloat(value);
        return !isNaN(numberValue) && numberValue >= 0;
      };
  
    return (
      <View style={Style.container}>
        <Text style={Style.heading}>Workout Diary</Text>
        <TextInput
          style={Style.input}
          placeholder={`Distance (${distanceUnit})`}
          value={distance}
          onChangeText={(text) => {
            setDistance(text);
            setError('');
          }}
          keyboardType='numeric'
        />
        <TextInput
          style={Style.input}
          placeholder="Duration (e.g., 30 minutes)"
          value={duration}
          onChangeText={(text) => {
            setDuration(text);
            setError('');
          }}
          keyboardType='numeric'
        />
        
        <View style={Style.workoutButtonsContainer}>
          {renderWorkoutButton('Running','run', 'Running')}
          {renderWorkoutButton('Skiing', 'ski', 'Skiing')}
          {renderWorkoutButton('Swimming', 'swim', 'Swimming')}
        </View>
        <Button
          icon="calendar"
          mode="contained"
          onPress={showDatePicker}
          style={{ marginBottom: 16 }}
        >
          {selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
        </Button>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
        <Button style={Style.workoutButtonsContainer}
          mode="contained"
          onPress={addWorkoutEntry}
          icon='weight-lifter'
        >
          Add Workout
        </Button>
      </View>
    );
  }
  
  export default HomeScreen;
