import { useNavigation } from "@react-navigation/native";
import { Button, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function Home(){


    const navigation = useNavigation() 

    function handleNext(){
         navigation.navigate('telaquestao')
    }

    function handleNextCorrecao(){
        navigation.navigate('sequenciaquestao')
   }

    return (

        <SafeAreaView>

            <Text>Bem-vindo ao scanner de gabarito Cesul</Text>

            <Button title="Baixar gabaritos" color={'#BE6A40'}
                onPress={handleNext}/>
            <Button title="Corrigir provas" color={'#BE6A40'} onPress={handleNextCorrecao}/>

            <Image source={require('../../assets/logo.png')} />
          
        </SafeAreaView>
    )
}