import React from 'react';
import {withProviders} from './providers';
import AppNavigation from 'navigation/shared/app-navigation';

const App = () => {
  return <AppNavigation />;
};

export default withProviders(App);
