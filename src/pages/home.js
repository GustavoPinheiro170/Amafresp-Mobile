import React  , {useRef, useContext, useState } from 'react'
import { Form } from '@unform/mobile';
import { StyleSheet, View , Text, Image, Button, TextInput} from 'react-native';
import { useLoginState } from '../UserContext';
import { LOGIN_USER } from '../../api';


export default function home({ navigation }) {

    const formRef = useRef(null);

    const {setDados , error, setError} = useLoginState();

    const [usuario, setUsuario] = React.useState('');
    const [senha, setSenha] = React.useState('');



    async function userLogin () {
      try {
          const {
              url,
              options
          } = LOGIN_USER(usuario, senha);
          const response = await fetch(url, options);
          const json = await response.json();
          setDados(json.Content)
          if (json.StatusCode !== 200 ) throw new Error('Usuario ou senha inválidos'); 
          else {
            navigation.navigate('Minha Conta'); 
          }

      } catch (err) {
          setError(err.message);
      }
  }
     
    return (
        <View style={styles.container}>

        <Form ref={formRef} onSubmit={userLogin}>
        <Image 
          style = {styles.logo}
          source={{uri: 'data:image/png;base64,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'}}
        />
  
        <Text style={styles.labelInput}>CPF :</Text>
        <TextInput name='cpf' type='text' 
         onChangeText = {(text) =>  {setUsuario(text)}}
         value = { usuario } 
         style = {styles.inputLogin}
  />
  
        <Text style={styles.labelInput} >Senha :</Text>
        <TextInput secureTextEntry={true}  name='senha' type='password'
          onChangeText = {(text) =>  { setSenha(text)}}
          value = { senha }
          style = {styles.inputLogin}
  />
    {error ? <Text>{ error }</Text> : null }

      <Button
          title="Entrar"
          color='#409d8a'
          onPress={() => formRef.current.submitForm()}
          style= {styles.buttonCustom}
        />
      </Form>    
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputLogin: {
        height: 40,
        width: 300,
        borderRadius: 5,
        borderColor: 'green', 
        borderWidth: 1,
        marginBottom: 30,
        backgroundColor: '#eee',
        padding: 10
    },
    buttonCustom: {
      color: '#409d8a',
      margin: 100,
      marginTop: 20,
    },
    logo: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 200,
      height: 90
    },
    labelInput :  {
      fontSize: 16,
      marginBottom: 5,
    }
  
  });