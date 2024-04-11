import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Atividade4() {

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [isFocusNome, setIsFocusNome] = useState(false);
    const [isFocusSobrenome, setIsFocusSobrenome] = useState(false);

    function handleJuntaNome() {
        setNomeCompleto(`${nome} ${sobrenome}`);
        // setNomeCompleto(nome + ' ' + sobrenome);
        setNome('');
        setSobrenome('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.texto}>{nomeCompleto}</Text>

            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={
                    isFocusNome ?
                        [styles.input,
                        {
                            color: '#ffcdd2',
                            backgroundColor: '#b71c1c',
                            outline: 'none'
                        }]
                        :
                        styles.input
                }
                onChangeText={(nm) => setNome(nm)}
                value={nome}
                onFocus={() => setIsFocusNome(true)}
                onBlur={() => setIsFocusNome(false)}
            />

            <Text style={styles.label}>Sobrenome</Text>
            <TextInput
                style={
                    isFocusSobrenome ?
                        [styles.input,
                        {
                            color: '#ffcdd2',
                            backgroundColor: '#b71c1c',
                            outline: 'none'
                        }]
                        :
                        styles.input
                }
                onChangeText={(sbnm) => setSobrenome(sbnm)}
                value={sobrenome}
                onFocus={() => setIsFocusSobrenome(true)}
                onBlur={() => setIsFocusSobrenome(false)}
            />

            <Pressable
                style={
                    ({ pressed }) => pressed ?
                        [styles.botao, styles.botaoPress]
                        :
                        styles.botao
                }
                onPress={() => handleJuntaNome()}
            >
                {
                    ({ pressed }) => (
                        <Text 
                            style={
                                pressed ? 
                                    [styles.txtBotao, 
                                        { color: '#b71c1c' }] 
                                    : 
                                        styles.txtBotao
                            }
                        >
                            Exibir nome completo
                        </Text>
                    )
                }
            </Pressable>
        </View>
    )
}
