import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//PAG 04
export function SequenciaQuestao() {

    const navigation = useNavigation()

    function handleBack(){
        //desempilha
        navigation.goBack
    }

    return (

        <SafeAreaView>
            <View>
                <Button title="Voltar" color={'#BE6A40'}
                    onPress={handleBack} />
                <Text>Coloque a sequência correta das questões</Text>
                <Text>Upload Imagens Gabarito</Text>
            </View>
            <View>
                <Image source={require('../../assets/logo.png')} />
            </View>
            <Text>VER COMO ABRIR A CAMERA NO NATIVE</Text>

        </SafeAreaView>

    )
}