import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Schedule } from '../screens/Schedule';
import { ScheduleDetails } from '../screens/ScheduleDetails';
import { ScheduleComplete } from '../screens/ScheduleComplete';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator headerMode='none'>
      <Screen
        name='Home'
        component={Home}
      />
      <Screen
        name='CarDetails'
        component={CarDetails}
      />
      <Screen
        name='Schedule'
        component={Schedule}
      />
      <Screen
        name='ScheduleDetails'
        component={ScheduleDetails}
      />
      <Screen
        name='ScheduleComplete'
        component={ScheduleComplete}
      />
    </Navigator>
  )
}