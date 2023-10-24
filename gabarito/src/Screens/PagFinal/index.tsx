import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//PAG 05
export function PagFinal() {

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
                <Text>Fazer Download da Tabela</Text>
                <Text>Fazer Upload Novamente</Text>
            </View>
            <View>
                <Image source={require('../../assets/logo.png')} />
            </View>
            <Text>VER COMO ABRIR A TABELA</Text>

        </SafeAreaView>

    )
}