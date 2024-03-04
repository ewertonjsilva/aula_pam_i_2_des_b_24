import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 

import Mensagem from './src/ex_2'; 
import nomes from './src/ex_2/listaNomes';

export default function App() {
  return (
    <View style={styles.container}>
      {
        nomes.map((pessoa, pos) => <Mensagem nome={pessoa.nome} pos={pos} idade={pessoa.idade} />)
      }     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
