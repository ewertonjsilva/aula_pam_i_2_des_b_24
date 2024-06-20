import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Atividades from '../atividades';
import Atividade1 from '../atv_1';
import Atividade3 from '../atv_3';
import Atividade4 from '../atv_4';
import Atividade5 from '../atv_5';
import Atividade6 from '../atv_6';

const Stack = createNativeStackNavigator();

export default function NavegacaoStackAtv() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Atividades" component={Atividades} />
            <Stack.Screen name="Atv1" component={Atividade1} />
            <Stack.Screen name="Atv3" component={Atividade3} />
            <Stack.Screen name="Atv4" component={Atividade4} />
            <Stack.Screen name="Atv5" component={Atividade5} />
            <Stack.Screen name="Atv6" component={Atividade6} />
        </Stack.Navigator>
    );
}
