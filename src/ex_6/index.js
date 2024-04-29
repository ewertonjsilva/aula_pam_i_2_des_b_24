import { View, Text } from 'react-native';

import Input from './input';

import styles from './styles';

export default function Exemplo6() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' />
                <Input placeholder='Altura' />
            </View>
        </View>
    )
}

