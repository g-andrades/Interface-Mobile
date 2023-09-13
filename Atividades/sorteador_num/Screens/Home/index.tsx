import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';
import { style } from "./style";

export default function Home() {

    const [num1, setNum1] = useState('0');
    const [num2, setNum2] = useState('0');
    const [operador, setOperador] = useState('');
    const [resposta, setResposta] = useState(0);
    const operadores = '+-/*';

    const [correts, setCorrets] = useState(0)
    const [wrongs, setWrongs] = useState(0)
    const [points, setPoints] = useState(0)

    var result: Number

    const min = 0;
    const max = 20;

    function getRandomInt() {

        const aleatorio = Math.floor(Math.random() * operadores.length);

        const operadorSorteado = operadores.charAt(aleatorio);

        setOperador(operadorSorteado)


        const sortNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
        const numero1 = sortNum1.toString();
        setNum1(numero1)

        const sortNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
        const numero2 = sortNum2.toString();
        setNum2(numero2)
    }

    function calcResposta() {

        const calNum1 = parseInt(num1, 10);
        const calNum2 = parseInt(num2, 10);

        switch (operador) {
            case '+':
                result = calNum1 + calNum2;
                break;
            case '-':
                result = calNum1 - calNum2;
                break;
            case '*':
                result = calNum1 * calNum2;
                break;
            case '/':
                result = calNum1 / calNum2;
                break;
        }

        validar()
        SetPoints()
    }

    const SetPoints = () => {
        if (result == resposta) {
            setPoints(points + 10)
        } else {
            setPoints(points - 5)
        }
    }

    const validar = () => {
        if (result == resposta) {
            setCorrets(correts + 1)
            Alert.alert('Você acertou', `Deseja uma nova conta?`,
                [
                    {
                        text: 'Sim',
                        onPress: (novoJogo)
                    },
                    {
                        text: 'Não',
                        style: 'cancel'
                    }
                ]
            )
            
        } else {
            setWrongs(wrongs + 1)
        }
    }

    const novoJogo = () => {
        setNum1('')
        setNum2('')
        setOperador('')
        setResposta(0)
        setCorrets(0)
        setWrongs(0)
        setPoints(0)
    }

    return (
        <View style={style.container}>
            <View style={style.placar}>
                <Text style={style.pontos}>Você tem {points} pontos</Text>
            </View>
            <View style={style.count}>
                <Text style={style.acerto}>Certas {correts}</Text>
                <Text style={style.erro}>Erradas {wrongs}</Text>
            </View>
            <View style={style.form}>
                <TouchableOpacity
                    style={style.button}
                    onPress={getRandomInt}>
                    <Text style={style.textButton}>Sortear Desafio</Text>
                </TouchableOpacity>
            </View>

            <View style={style.separator} />

            <Text style={style.title}>
                Quanto é:
            </Text>

            <View style={style.calculo}>

                <View style={style.bloc}>
                    <Text style={style.calc}>
                        {num1}
                    </Text>
                </View>
                <View style={style.bloc}>
                    <Text style={style.calc}>
                        {operador}
                    </Text>
                </View>
                <View style={style.bloc}>
                    <Text style={style.calc}>
                        {num2}
                    </Text>
                </View>
            </View>
            <Text style={style.title}>
                Informe sua resposta:
            </Text>

            <View style={style.inputt}>

                <TextInput
                    keyboardType="numeric"
                    style={style.input}
                    onChangeText={text => setResposta(text)}
                    value={resposta}

                ></TextInput>

                <TouchableOpacity
                    style={style.bttResp}
                    onPress={calcResposta}>
                    <Text style={style.textResp}>Validar</Text>
                </TouchableOpacity>
                

            </View>

            <View style={style.nwGame}>

                <TouchableOpacity
                    style={style.zerar}
                    onPress={novoJogo}>
                    <Text style={style.bttZerar}>Novo Jogo</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}