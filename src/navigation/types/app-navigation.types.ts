import {APP_ROUTER} from '.';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type AppStackParamList = {
  [APP_ROUTER.BOTTOM_BAR]: undefined;
};

export type AppRouteType<T extends keyof AppStackParamList> = RouteProp<
  AppStackParamList,
  T
>;

export type NavigationType = StackNavigationProp<AppStackParamList>;
