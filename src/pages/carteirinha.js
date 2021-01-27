import React, { useEffect, useState} from 'react'
import { View, Text } from 'react-native';
import { CARD_GET } from '../../api';
import { useCardContext } from '../UserContext';

export default function carteirinha() {
    const {dados, setCarteirinha, setError} = useCardContext();

    const [ card, setCard] = useState('');

    async function getCarteirinha() {

        try {   
        const {
            url,
            options
        } = CARD_GET(dados.Codigo);
        const response = await fetch(url, options);
        const json = await response.json();
        setCarteirinha(json.Content);
        setCard(json.Content[0]);

        }catch(err) {
            setError(err.message)
        } 
        
    }

    useEffect(() =>  { 
        if(dados) {
            getCarteirinha()  
        }
    }, [])


    return (
        <View>
            <Text>{card.nome}</Text>
        </View>
    )
}
