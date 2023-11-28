import { Text, TextInput, Button, View, Alert } from 'react-native';
import { Container, Input } from './styles';
import { useState } from 'react';
import api from '../../services/axios';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        api.post('/vendedor/login', {
            email: username,
            senha: password
        }).then((response) => {
            const data = response.data
            Alert.alert("Login realizado com sucesso!")

        }).catch((error) => {
            Alert.alert('Problema ao realizar o login')
        })
    }

        return (
            <Container>
                <Input value={username} onChangeText={setUsername}></Input>

                <Input value={password} onChangeText={setPassword}></Input>

                <Button onPress={handleLogin} title="login" />
            </Container>
        )
    
}

export default Login;