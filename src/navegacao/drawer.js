import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { Button } from 'react-native';

const Drawer = createDrawerNavigator();

import NavegacaoBottomTab from './bottomTab';
import Sobre from '../sobre';

export default function NavegacaoDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#7F0000' },
                    headerTitleStyle: { color: '#fff' },
                    headerTintColor: '#fff',
                    // headerRight: () => (
                    //     <Button
                    //         onPress={() => alert('Botão pressionado!')}
                    //         title="Voltar"
                    //         color="#000"
                    //     />
                    // ),                
                    // drawerActiveBackgroundColor: '#FF735C',
                    // drawerInactiveBackgroundColor: '#C6C6C6',
                    // drawerLabelStyle: {                        
                    //     width: '100%',
                    //     color: '#000',
                    //     flexShrink: 1,
                    //     flex: 1,
                    //     fontSize: 12,
                    // },
                    // drawerItemStyle: {
                    //     borderRadius: 30,
                    //     marginVertical: 4,
                    //     width: '90%',
                    //     alignSelf: 'center',
                    // },
                    // drawerStyle: {
                    //     width: '55%',
                    //     backgroundColor: '#7F0000',
                    // },
                }}
            >
                <Drawer.Screen name="Home" component={NavegacaoBottomTab} />
                <Drawer.Screen name="Sobre" component={Sobre} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}