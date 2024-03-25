import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade3() {

    const [numero, setNumero] = useState(0);

    function mensagem () {
        alert('Aula de React-Native');
    }

    function incrementar() {
        setNumero(numero + 1); 
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>
            <TouchableOpacity style={styles.botao} onPress={() => mensagem()}>
                <Text style={styles.txtBotao}>Botão</Text>
            </TouchableOpacity>
            <Text style={styles.titulo}>{numero}</Text>
            <TouchableOpacity style={styles.botao} onPress={() => incrementar()}>
                <Text style={styles.txtBotao}>Incrementar nº</Text>
            </TouchableOpacity>
        </View>
    );
}