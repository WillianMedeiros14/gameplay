import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { userAuth } from '../hooks/auth';

import { SignIn } from '../screens/SignIn'
import { AuthRoutes } from './auth.routes';

export function Routes(){
    const { user } = userAuth();

    return (
        <NavigationContainer>
            { user.id ? <AuthRoutes /> : <SignIn /> }
        </NavigationContainer>
    );
}