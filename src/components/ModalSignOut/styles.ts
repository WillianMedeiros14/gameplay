import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: theme.colors.overlay,
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      width: '100%',
      height: 240,
     
    },
    viewtitle: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 28
    },
    title: {
      fontSize: 20,
      fontFamily: theme.fonts.title700,
      color: theme.colors.heading
    },
    gameplay: {
      fontSize: 20,
      color: theme.colors.primary,
      fontFamily: theme.fonts.title700,
    },
    bar: {
      width: 39,
      height: 2,
      borderRadius: 2,
      backgroundColor: theme.colors.secondary30,
      alignSelf: 'center',
      marginTop: 13,
    },


    // Botão


    SignOut: {
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 28,
      justifyContent: 'space-between',
      paddingBottom: 28
    },
    buttonSair: {
      width: '100%',
      height: 56,
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center'
    },
    titleBotao: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: theme.fonts.text500
    },


   
    containerbuttonFecharModal: {
      width: '100%',
      height: 56,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      
      borderWidth: 1,
      borderColor: theme.colors.secondary30,
    },
    
});