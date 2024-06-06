import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Atividade6() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const mensErro = 'Valores inseridos de forma incorreta!';
    const [mensagem, setMensagem] = useState('');

    function calculaImc() {
        const tmpImc = peso / (altura * altura);
        setImc(tmpImc);
        validaMensagem(tmpImc);
    }

    function validaMensagem(imc) {
        if (imc < 18.5) {
            setMensagem('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            setMensagem('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            setMensagem('Sobrepeso');
        } else if (imc >= 30 && imc < 35) {
            setMensagem('Obesidade grau I');
        } else if (imc >= 35 && imc < 40) {
            setMensagem('Obesidade grau II');
        } else {
            setMensagem('Obesidade grau III');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

            <Text style={[styles.imc, styles.txtMensagem]}>{mensagem}</Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
        </View>
    )
}

