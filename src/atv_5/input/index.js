import { useState } from 'react';
import { TextInput } from 'react-native'; 

import styles from './styles';

export default function Input({readOnly = false, valor, atualizaValor}) { 
    
    const [isFocus, setIsFocus] = useState(false);

    return (
        <TextInput
            style={
                [
                    styles.txtEntrada,
                    isFocus ?
                        {
                            borderColor: '#C51162',
                            outline: 'none',
                        }
                        :
                        {}
                ]
            }
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            readOnly={readOnly} 
            onChangeText={(num) => atualizaValor(num)}
            value={valor}
        />
    );
}