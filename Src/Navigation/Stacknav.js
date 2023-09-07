/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Authscreens/Login';

const Stack = createNativeStackNavigator();


const StackNavi = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false

        }}>
            <Stack.Screen
                name="Login"
                component={Login}


            />

        </Stack.Navigator>
    );
};
export default StackNavi;
