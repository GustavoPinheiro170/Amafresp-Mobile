import React , { createContext, useState, useContext } from 'react';

 const ContextAplication = createContext();

export const UserContextProvider = ({children}) => {

    const [dados, setDados] = useState('');
    const [error, setError] = useState('');

    const [ carteirinha, setCarteirinha] = useState('');

    return ( 
    <ContextAplication.Provider value = {{ 
        dados, 
        error, 
        carteirinha,

        setCarteirinha,
        setDados,  
        setError}} >{children}</ContextAplication.Provider>
    );
}

export function useLoginState(){
    const context = useContext(ContextAplication);
    const { dados, setDados, error, setError} = context;
    return { dados, setDados, error, setError};
}

export function useCardContext(){
    const context = useContext(ContextAplication);
    const { dados, carteirinha , setCarteirinha, setError} = context;
    return { dados,   carteirinha , setCarteirinha, setError};

}