import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade3() {

    const [numero, setNumero] = useState(0);

    function incrementar() {
        setNumero(numero + 1);
    }

    function decrementar() {
        setNumero(numero - 1);
    }

    function zerar() {
        setNumero(0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>

            <View style={styles.containerLadoLado}>
                
                <TouchableOpacity style={[styles.botao, styles.botaoContainer]} onPress={() => decrementar()}>
                    <Text style={styles.txtBotao}>-</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>{numero}</Text>

                <TouchableOpacity style={[styles.botao, styles.botaoContainer]} onPress={() => incrementar()}>
                    <Text style={styles.txtBotao}>+</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botao} onPress={() => zerar()}>
                <Text style={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity>
        </View>
    );
}