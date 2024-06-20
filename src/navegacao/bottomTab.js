import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NavegacaoStackAtv from './stackAtividades';
import NavegacaoStackEx from './stackExemplos';

const Tab = createBottomTabNavigator();

export default function NavegacaoBottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Exemplos" component={NavegacaoStackEx} />
      <Tab.Screen name="Atividades" component={NavegacaoStackAtv} />
    </Tab.Navigator>
  );
}