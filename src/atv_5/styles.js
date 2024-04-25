import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', 
      backgroundColor: '#FF80AB',
      padding: 8, 
      width: '100%', 
      borderRadius: 20, 
    },
    titulo: {
      margin: 6,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center', 
      color: '#C51162', 
    },
    txtSaida: {
      margin: 6, 
      fontSize: 22, 
      fontWeight: 'bold', 
      textAlign: 'center', 
      color: '#E91E63',     
    }, 
    textLabel: {
      fontSize: 16, 
      fontWeight: 'bold', 
      color: '#C51162',     
    }, 
    containerBotoes: {
      flexDirection: 'row', 
      justifyContent: 'space-between'
    }, 
  });
  
  export default styles;