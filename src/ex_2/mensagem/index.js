import { Text } from 'react-native';

import styles from './styles';

export default function Mensagem(props) {
    return (
        <Text style={styles.texto}>
            Olá {props.nome}
        </Text>
    );
}

