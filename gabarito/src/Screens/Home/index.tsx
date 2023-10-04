import { useNavigation } from "@react-navigation/native";
import { Button, Image, Text, View } from "react-native";

export function Home(){


    const navigation = useNavigation() 

    function handleNext(){
         navigation.navigate('telaquestao')
    }

    return (

        <View>

            <Text>Bem-vindo ao scanner de gabarito Cesul</Text>

            <Button title="Baixar gabaritos" color={'#BE6A40'}
            onPress={handleNext}/>
            <Button title="Corrigir provas" color={'#BE6A40'}
            onPress={handleNext}/>

            <Image source={require('../Home/image.png')}></Image>
          
        </View>
    )
}