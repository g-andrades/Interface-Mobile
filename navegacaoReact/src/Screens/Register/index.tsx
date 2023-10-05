import { useNavigation } from "@react-navigation/native"
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';



export function Register(){

    const [name, setName] = useState('');

    const navigation = useNavigation()

    function handleNext(){
        navigation.navigate('result', {name})
    }

    function handleBack(){
        navigation.goBack()
    }

    function handleFinish(){
    }


    return(
        <SafeAreaView>
            <Text> CESUL </Text>

            <View>
                <Text>Informa seu nome</Text>
                <TextInput value = {name} onChangeText={setName}/>
            </View>

            <View>
                <Text>Informa seu sobrenome</Text>
                <TextInput/>
            </View>

            <View>
                <Button onPress={handleBack} title = "Voltar" color={'#860929'}/>
                <Button onPress={handleNext} title = "Proximo" color={'#01633D'}/>
            </View>

        </SafeAreaView>
    )
}