import { useState } from 'react';
import { View, Text, Touchable } from 'react-native';

import styles from './styles';

export default function Exemplo_3() {

    const [numero, setNumero] = useState(0);

    function mensagem () {
        alert('Aula de React-Native');
    }

    function incrementar() {
        setNumero(numero + 1); 
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Touchable style={styles.botao} onPress={() => mensagem()}>
                <Text style={styles.txtBotao}>Botão</Text>
            </Touchable>
            <Text style={styles.titulo}>{numero}</Text>
            <Touchable style={styles.botao} onPress={() => incrementar()}>
                <Text style={styles.txtBotao}>Incrementar nº</Text>
            </Touchable>
        </View>
    );
}

