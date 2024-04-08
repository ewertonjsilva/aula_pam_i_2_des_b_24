import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native'; 

import styles from './styles'; 

export default function Atividade4 () { 

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [nome, setNome] = useState(''); 
    const [sobrenome, setSobrenome] = useState(''); 

    function handleJuntaNome() {
        setNomeCompleto(`${nome} ${sobrenome}`);         
        // setNomeCompleto(nome + ' ' + sobrenome);
        setNome(''); 
        setSobrenome('');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.texto}>{nomeCompleto}</Text> 

            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.input} onChangeText={(nm) => setNome(nm)} value={nome} />

            <Text style={styles.label}>Sobrenome</Text>            
            <TextInput style={styles.input} onChangeText={(sbnm) => setSobrenome(sbnm)} value={sobrenome} />

            <Pressable style={styles.botao} onPress={() => handleJuntaNome()}>
                <Text style={styles.txtBotao}>Exibir nome completo</Text>
            </Pressable>
        </View>
    )
}
