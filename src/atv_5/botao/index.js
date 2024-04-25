import { Pressable, Text } from 'react-native';

import styles from './styles';

export default function Botao({operacao, children, botaozao}) { 
    
    return (
        <Pressable
            onPress={() => operacao()}
            style={
                ({ pressed }) => pressed ?
                    [styles.button, styles.buttonTouch, botaozao ? styles.botaoGrande : '']
                    :
                    [styles.button, botaozao ? styles.botaoGrande : '']
            }
        >
            <Text style={styles.textButton}> {children} </Text>
        </Pressable>
    )
}