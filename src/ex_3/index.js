import { View, Text, Pressable, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function Exemplo_3() {
    return (
        <View>
            <Text>Exemplo 3</Text>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
            ]}>
                <Text>Botão</Text>
            </Pressable>
            <TouchableHighlight>
                <Text>Botão Highlight</Text>
            </TouchableHighlight>
            <TouchableOpacity>
                <Text>Botão Opacit</Text>
            </TouchableOpacity>
        </View>
    );
}