import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {BOTTOM_BAR_ROUTER, BottomBarStackParamList} from 'navigation/types';
import React, {useCallback} from 'react';
import {AddingBooksScreen, AddingUsersScreen} from 'screens/bottom-bar';
import {BookIcon, UserIcon} from 'shared/assets/icons';
import {COLORS} from 'shared/lib';

const Tab = createBottomTabNavigator<BottomBarStackParamList>();

const options: BottomTabNavigationOptions = {
  tabBarHideOnKeyboard: true,
  tabBarShowLabel: false,
  headerShown: true,
};

const BottomBarNavigation = () => {
  const renderIcon = useCallback(
    ({focused, name}: {focused: boolean; name: BOTTOM_BAR_ROUTER}) => {
      switch (name) {
        case BOTTOM_BAR_ROUTER.ADD_USERS:
          return (
            <UserIcon
              fill={focused ? COLORS.blue : COLORS.gray}
              width={24}
              height={24}
            />
          );
        case BOTTOM_BAR_ROUTER.ADD_BOOKS:
          return (
            <BookIcon
              fill={focused ? COLORS.blue : COLORS.gray}
              width={24}
              height={24}
            />
          );
      }
    },
    [],
  );

  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen
        name={BOTTOM_BAR_ROUTER.ADD_USERS}
        component={AddingUsersScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderIcon({focused, name: BOTTOM_BAR_ROUTER.ADD_USERS}),
          title: 'Добавление авторов',
        }}
      />
      <Tab.Screen
        name={BOTTOM_BAR_ROUTER.ADD_BOOKS}
        component={AddingBooksScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderIcon({focused, name: BOTTOM_BAR_ROUTER.ADD_BOOKS}),
          title: 'Добавление книг',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomBarNavigation;
