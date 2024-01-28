import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './styles';

export const withGesture = (component: () => React.ReactNode) => () =>
  (
    <GestureHandlerRootView style={styles.container}>
      {component()}
    </GestureHandlerRootView>
  );
