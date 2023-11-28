import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//PAG 03
export function DownloadGabarito() {

    const navigation = useNavigation()

    function handleBack(){
        //desempilha
        navigation.navigate('telaquestao')
    }

    return (

        <SafeAreaView>
            <View>
                <Button title="Voltar" color={'#BE6A40'}
                    onPress={handleBack} />
                <Text>Download</Text>
                <Text>Selecione o modelo de gabarito usado na avaliação</Text>
            </View>
            <View>
                <Image source={require('../../assets/logo.png')} />
            </View>
                <Text>VER COMO FAZ DOWNLOAD</Text>
        </SafeAreaView>

    )
}