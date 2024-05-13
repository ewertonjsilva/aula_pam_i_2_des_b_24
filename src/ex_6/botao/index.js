import { Pressable, Text } from 'react-native';

import styles from './styles';

export default function Botao({ children }) {
    return (
        <Pressable
            style={
                ({ pressed }) => pressed ?
                    [styles.botao, styles.btnPress]
                :
                    styles.botao
            }
        >
            <Text style={styles.txtBotao}>{children}</Text>
        </Pressable>
    );
}