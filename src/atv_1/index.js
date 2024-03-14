import { View, Text, Image } from 'react-native'; 

import Ola from './ola'; 

import styles from './styles'; 

import logo from '../../assets/002-1-react-native.png'; 

export default function Atividade1 () { 

    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.imagem} />
            <Text style={styles.titulo}>
                Atividade 1
            </Text>
            <Ola>Jascinto</Ola>
            <Ola>Jascinta</Ola>           
        </View>
    );
}
