import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {styles} from './styles';

export const withNavigationContainer =
  (component: () => React.ReactNode) => () =>
    (
      <SafeAreaProvider style={styles.container}>
        <NavigationContainer>{component()}</NavigationContainer>
      </SafeAreaProvider>
    );
