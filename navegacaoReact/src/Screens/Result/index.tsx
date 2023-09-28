import { Button, Text, View } from "react-native";


export function Result(){

    return(
        <View>
            <Text>Cesul</Text>

            <Text>Olá fulana</Text>

            <Text>número do seu cupom é: </Text>

            <Text>424242</Text>

            <View>
                <Button title="Voltar"  color={'#860929'}/>
                <Button title="Finalizar" color={'#01633D'} />
            </View>


        </View>
    )
}