import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// import Exemplo2 from './src/ex_2';
// import Atividade1 from './src/atv_1';
// import nomes from './src/ex_2/listaNomes'; 

import Exemplo_3 from './src/ex_3';
// import Atividade3 from './src/atv_3'; 

// import Exemplo4 from './src/ex_4';
// import Atividade4 from './src/atv_4';

// import Exemplo5 from './src/ex_5';
// import Atividade5 from './src/atv_5';

// import Exemplo6 from './src/ex_6';
// import Atividade6 from './src/atv_6';
// import Exemplo7 from './src/ex_7';
import Exemplo8 from './src/ex_8';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo8 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa', 
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 18, 
  },
});

/*
{
  nomes.map((pessoa, pos) => <Mensagem nome={pessoa.nome} pos={pos} idade={pessoa.idade} />)
}     
*/