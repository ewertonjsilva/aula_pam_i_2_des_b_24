import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import 'react-native-gesture-handler';

import NavegacaoDrawer from './src/navegacao/drawer';

export default function App() {
  return (
    <View style={styles.container}>
      <NavegacaoDrawer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa', 
    // alignItems: 'center',
    // justifyContent: 'center', 
    padding: 18, 
  },
});

/*
{
  nomes.map((pessoa, pos) => <Mensagem nome={pessoa.nome} pos={pos} idade={pessoa.idade} />)
}     
*/