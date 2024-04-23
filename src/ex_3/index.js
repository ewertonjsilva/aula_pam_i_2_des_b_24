import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

export default function Exemplo_3() {

    var numero = 0;

    function incrementar() {
        numero = numero + 1; 
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Pressable style={styles.botao} onPress={() => alert('Hello World!')}>
                <Text style={styles.txtBotao}>Botão</Text>
            </Pressable>
            <Text style={styles.titulo}>{numero}</Text>
            <Pressable style={styles.botao} onPress={() => incrementar()}>
                <Text style={styles.txtBotao}>Incrementar nº</Text>
            </Pressable>
        </View>
    );
}

