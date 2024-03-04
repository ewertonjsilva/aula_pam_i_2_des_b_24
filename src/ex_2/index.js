import { View, Text } from 'react-native'; 

import styles from './styles';

export default function Mensagem ({nome, idade, pos}) { 

    // const mai = sobrenome.toUpperCase();

    return(
        <View style={styles.container}>
            <Text style={styles.mensagem}>
                ID: {pos + 1}
            </Text>
            <Text style={styles.mensagem}>
                Nome: {nome}
            </Text>
            <Text style={styles.mensagem}>
                Idade: {idade}
            </Text>
        </View>
    );
}
