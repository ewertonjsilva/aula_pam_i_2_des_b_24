import { View, Pressable, Text } from 'react-native'; 

export default function Exemplos({ navigation }) {
    return(
        <View>
            <Pressable onPress={() => navigation.navigate('Ex2')}>
                <Text>Exemplo 2</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Ex3')}>
                <Text>Exemplo 3</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Ex4')}>
                <Text>Exemplo 4</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Ex5')}>
                <Text>Exemplo 5</Text>
            </Pressable>
        </View>
    );
}