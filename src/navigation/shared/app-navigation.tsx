import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_ROUTER, AppStackParamList} from 'navigation/types';
import BottomBarNavigation from './bottom-bar-navigation';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={APP_ROUTER.BOTTOM_BAR}
        component={BottomBarNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
