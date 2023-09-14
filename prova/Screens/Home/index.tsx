import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState} from 'react';
import { style } from "./style";

export default function Home() {

    const [homens, setHomens] = useState(0);
    const [mulheres, setMulheres] = useState(0);
    const [criancas, setCriancas] = useState(0);

    const getCalcCarne = () => {
        const carneHomens = (homens * 400)
        const carneMulheres = (mulheres * 300)
        const carneCrianca = (criancas * 200)
        return carneHomens + carneMulheres + carneCrianca;
    }

    const getCalcAperitivo = () => {
        const aperitivoHomens = (homens * 150)
        const aperitivoMulheres = (mulheres * 100)
        const aperitivoCrianca = (criancas * 50)
        return aperitivoHomens + aperitivoMulheres + aperitivoCrianca;
    }

    const getTotalComida = () => {
        const totalC = Number(getCalcCarne()) + Number(getCalcAperitivo())
        return totalC;
    }

    const getCalcBebidaAl = () => {
        const bebidaAlHomens = (homens * 4)
        const bebidaAlMulheres = (mulheres * 2) 
        return bebidaAlHomens + bebidaAlMulheres;
    }
    const getCalcAgua = () => {
        const aguaMulheresCriancas = (mulheres + criancas) * 2 
        return aguaMulheresCriancas;
      };
    
    const getCalcularRefri = () => {
        const refriMulheresCriancas = (mulheres + criancas) * 1.5 
        return refriMulheresCriancas;
    };

    const getParticipantes = () => {
        const partic = Number(homens) + Number (mulheres) + Number(criancas)
        return partic;
    };

    const getTotalBebida = () => {
        const totalB = Number(getCalcBebidaAl()) + Number(getCalcAgua()) + Number(getCalcularRefri())
        return totalB;
    }

    
    function novoCalc(): void {
        setHomens(0);
        setMulheres(0);
        setCriancas(0);
    }

    return (
        <View style={style.container}>
            <View>
                <Text style={style.churraSul}> ChurraSul</Text>
            </View>

            <View>
                <TextInput
                    style={style.input}
                    placeholder="Homens"
                    placeholderTextColor={"black"}
                    keyboardType="numeric"
                    value={homens}
                    onChangeText={(text) => setHomens(text)}
                />
                <TextInput
                    style={style.input}
                    placeholder="Mulheres"
                    placeholderTextColor={"black"}
                    keyboardType="numeric"
                    value={mulheres}
                    onChangeText={(text) => setMulheres(text)}
                />
                <TextInput
                    style={style.input}
                    placeholder="Crianças"
                    placeholderTextColor={"black"}
                    keyboardType="numeric"
                    value={criancas}
                    onChangeText={(text) => setCriancas(text)}
                />
            </View>

            <View>
                <TouchableOpacity
                    style={style.button}
                    onPress={getCalcCarne}>
                    <Text style={style.textButton}>Calcular</Text>
                </TouchableOpacity>
            </View>

            <Text style={style.title}>Resultado</Text>
            <Text style={style.result}>
                Realizamos o teste com {getParticipantes()} participantes
            </Text>
                 
                <View >
                    <Text style={style.comida}>Comida</Text>
                    <View style={style.view}>
                    <Text style={style.carne}>Carne: {getCalcCarne()}g</Text>
                    <Text style={style.aperitivo}>Aperitivos: {getCalcAperitivo()}g</Text>
                    <Text style={style.totalC}>Total: {getTotalComida()}g </Text>
                    </View>
                </View>

                <View >
                    <Text style={style.title}>Bebida</Text>
                    <View style={style.view}>
                    <Text style={style.cerveja}>Cerveja: {getCalcBebidaAl()}L</Text>
                    <Text style={style.agua}>Agua: {getCalcAgua()}L</Text>
                    <Text style={style.refrigerante}>Refrigerante: {getCalcularRefri()}L </Text>
                    </View>
                    <Text style={style.totalB}>Total: {getTotalBebida()}</Text>
                </View>

            <TouchableOpacity
                style={style.zerar}
                onPress={novoCalc}>
                <Text style={style.bttZerar}>Limpar</Text>
            </TouchableOpacity>

        </View>
    )

}