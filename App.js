import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import ContactListScreen from './src/screens/ContactListScreen';
import ContactDetailScreen from './src/screens/ContactDetailScreen';
import ContactUpdateScreen from './src/screens/ContactUpdateScreen';
import {configureStore} from './src/stores';

const store = configureStore();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          headerMode={'none'}>
          <Stack.Screen name="ContactList" component={ContactListScreen} />
          <Stack.Screen name="ContactDetail" component={ContactDetailScreen} />
          <Stack.Screen name="ContactUpdate" component={ContactUpdateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
