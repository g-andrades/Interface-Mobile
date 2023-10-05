import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type RouteParams ={
    name: string,
    valor: number
}

export function Result(){

    const navigation = useNavigation()
    const route = useRoute()

    const objeto = route.params as RouteParams
    //igual
    const {name} = route.params as RouteParams

    function handleBack(){
        navigation.goBack()

    }

    function handleFinish(){
        navigation.navigate('home')

    }

    return(
        <SafeAreaView>

            <Text>CESUL</Text>
            <Text>Olá, {name}</Text>
            <Text>O número do seu cupom é:</Text>
            <Text>4242424</Text>

            <View>
                <Button onPress={handleBack} title="Voltar" color={'#860929'}/>
                <Button  onPress={handleFinish} title="Finalizar" color={'#01633D'}/>
            </View>
        </SafeAreaView>
    )
}