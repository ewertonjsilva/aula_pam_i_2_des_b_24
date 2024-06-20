import { View, Pressable, Text } from 'react-native'; 

export default function Atividades({ navigation }) {
    return(
        <View>
            <Pressable onPress={() => navigation.navigate('Atv1')}>
                <Text>Atividade 1</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Atv3')}>
                <Text>Atividade 3</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Atv4')}>
                <Text>Atividade 4</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Atv5')}>
                <Text>Atividade 5</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Atv6')}>
                <Text>Atividade 6</Text>
            </Pressable>
        </View>
    );
}