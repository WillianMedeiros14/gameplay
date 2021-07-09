import React from 'react';
import { 
  View,
  Text,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

import { Background } from '../Background';


import { styles } from './styles';

type Props =  ModalProps &{
  closeModal: () => void;
  signOut: () => void;
}


export function ModalSignOut({ closeModal, signOut, ...rest}: Props) {
    
  function close(){
    closeModal();
  }

  function sair(){
    signOut();
  }

  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
        <View style={styles.overlay}>
          <View style={styles.container}>
          <Background>
              <View style={styles.bar} />
              <View style={styles.viewtitle}>
                <Text style={styles.title}>
                  Deseja sair do Game 
                </Text>
                <Text style={styles.gameplay}>
                  Play
                </Text>
                <Text style={styles.title}>
                  ?
                </Text>
              </View>

              <View style={styles.SignOut}>
                <TouchableOpacity style={styles.containerbuttonFecharModal} onPress={close}>
                  <Text style={styles.titleBotao}>Não</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSair} onPress={sair}>
                  <Text style={styles.titleBotao}>Sim</Text>
                </TouchableOpacity>
              </View>
              
            </Background>
          </View>
        </View>
    </Modal>
  );
}


            