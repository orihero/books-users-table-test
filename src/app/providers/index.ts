import compose from 'compose-function';
import {withGesture} from './with-gesture';
import {withNavigationContainer} from './with-navigation-container';

export const withProviders = compose(withGesture, withNavigationContainer);
