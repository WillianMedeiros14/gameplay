import React, { useState } from 'react';
import {
    View,
    Text,
    Alert
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { userAuth } from '../../hooks/auth';

import { Avatar } from '../Avatar';
import { ModalSignOut } from '../ModalSignOut';
import { Button } from '../Button';

import { styles } from './styles';

export function Profile() {
    const { user, signOut } = userAuth();
    const [openSignOutModal, setOpenSignOutModal] = useState(false);

    function handleOpenSignOut(){
        setOpenSignOutModal(true);
    }
    
    function handleCloseSignOut(){
        setOpenSignOutModal(false);
    }  
    
    function handleSignOut(){
        signOut();
    }

  return (
    <View style={styles.container}>

        <RectButton onPress={handleOpenSignOut}>
            <Avatar urlImage={user.avatar} />
        </RectButton>

        <View>
            <View style={styles.user}>
                <Text style={styles.greeting}>
                    Olá,
                </Text>

                <Text style={styles.username}>
                    { user.firstName }
                </Text>
            </View>

            <Text style={styles.message}>
                Hoje é dia de vitória
            </Text>
        </View>


        <ModalSignOut visible={openSignOutModal} closeModal={handleCloseSignOut} signOut={handleSignOut}/>

    </View>
  );
}

