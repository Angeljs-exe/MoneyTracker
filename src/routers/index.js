import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SignIn,
  SplashScreen,
  SignUp,
  Home,
  CashonHand,
  CashonBank,
} from '../pages';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
//mconst Tab = createBottomTabNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CashonHand"
        component={CashonHand}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CashonBank"
        component={CashonBank}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;

// export function Tap1() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
//       <Tab.Screen
//         name="CashonHand"
//         component={CashonHand}
//         options={{headerShown: false}}
//       />
//     </Tab.Navigator>
//   );
// }
