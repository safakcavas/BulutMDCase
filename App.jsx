import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import ListScreen from './Screens/ListScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Film" component={ListScreen} />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
