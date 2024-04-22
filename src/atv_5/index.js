import { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

import Input from './input';

import styles from './styles';

export default function Atividade5() {

    const [isFocusTotal, setIsFocusTotal] = useState(false); 
    const [sinal, setSinal] = useState('');

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    function soma() {
        setTotal(parseFloat(n1) + parseFloat(n2));
        setSinal('+');
    }

    function subtracao() {
        setTotal(parseFloat(n1) - parseFloat(n2));
        setSinal('-');
    }

    function multiplicacao() {
        setTotal(parseFloat(n1) * parseFloat(n2));
        setSinal('*');
    }

    function divisao() {
        setTotal(parseFloat(n1) / parseFloat(n2));
        setSinal('/');
    }

    function zerar() {
        setTotal(0);
        setN1(0);
        setN2(0);
        setSinal('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1º número </Text>
            <Input valor={n1} atualizaValor={setN1} />

            <Text style={styles.txtSaida}> {sinal} </Text>

            <Text style={styles.textLabel}> 2º número </Text>
            <Input valor={n2} atualizaValor={setN2} />

            <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <Input valor={total} readOnly='true' />

            <View style={styles.containerBotoes}>
                <Pressable
                    onPress={() => soma()}
                    style={
                        ({ pressed }) => pressed ?
                            [styles.button, styles.buttonTouch]
                            :
                            styles.button
                    }
                >
                    <Text style={styles.textButton}> + </Text>
                </Pressable>

                <Pressable
                    onPress={() => subtracao()}
                    style={
                        ({ pressed }) => pressed ?
                            [styles.button, styles.buttonTouch]
                            :
                            styles.button
                    }
                >
                    <Text style={styles.textButton}> - </Text>
                </Pressable>

                <Pressable
                    onPress={() => multiplicacao()}
                    style={
                        ({ pressed }) => pressed ?
                            [styles.button, styles.buttonTouch]
                            :
                            styles.button
                    }
                >
                    <Text style={styles.textButton}> * </Text>
                </Pressable>

                <Pressable
                    onPress={() => divisao()}
                    style={
                        ({ pressed }) => pressed ?
                            [styles.button, styles.buttonTouch]
                            :
                            styles.button
                    }
                >
                    <Text style={styles.textButton}> / </Text>
                </Pressable>
            </View>

            <Pressable
                onPress={() => zerar()}
                style={
                    ({ pressed }) => pressed ?
                        [styles.button, styles.buttonTouch, {width: '100%'}]
                        :
                        [styles.button, {width: '100%'}]
                }
            >
                <Text style={styles.textButton}> Zerar </Text>
            </Pressable>

        </View>
    );
}