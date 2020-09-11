import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Tarot from './pages/Tarot';
import Cards from './pages/Cards';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#401650',
          },
        }}
      >
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="Tarot" component={Tarot} />
        <AppStack.Screen name="Cards" component={Cards} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
