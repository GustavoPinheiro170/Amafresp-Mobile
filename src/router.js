import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './pages/home';
import Details from './pages/details';
import carteirinha from './pages/carteirinha';
import { useLoginState } from './UserContext';



const Stack = createStackNavigator();



function Routes() {
    const {dados} = useLoginState();
    const name = dados.Nome;

    return (
   
            <NavigationContainer>
                <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#058069',
                    },
                    headerTitleStyle: {
                        color: 'white'
                      }
                }}>
                    <Stack.Screen
                    name='Home'
                    component={Home}
                    options= {{
                        title: "Login",
                        headerRight: () =>  (
                                <TouchableOpacity style={{marginRight: 15}} >
                                    <Feather
                                    name="log-in"
                                    size={24}
                                    color="black"
                                    
                                    />
                                </TouchableOpacity>
                        )
                    }}
                    />

                    <Stack.Screen
                    name='Minha Conta'
                    component={Details} 
                    options= {{
                        title: `Olá ${dados ? name.split(' ', 1 ) : null}`,
                        headerRight: () =>  (
                                <TouchableOpacity style={{marginRight: 15}}>
                                    <Feather
                                    name="log-out"
                                    size={24}
                                    color="white"
                                    />
                                </TouchableOpacity>
                        )
                    }}
                    />

                    <Stack.Screen
                    name='Carteirinha'
                    component={carteirinha} 
                    options= {{
                        title: "Carteirinha",
                        headerRight: () =>  (
                                <TouchableOpacity style={{marginRight: 15}}>
                                    <Feather
                                    name="log-out"
                                    size={24}
                                    color="black"
                                    />
                                </TouchableOpacity>
                        )
                    }}
                    />

                </Stack.Navigator>

            </NavigationContainer>
        
    );
}
export default Routes;
