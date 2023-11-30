import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';

//PAG 05
export function PagFinal() {

    const navigation = useNavigation()

    function handleBack() {
        //desempilha
        navigation.navigate('home')
    }
    function handleNext() {
        navigation.navigate('uploadimage')
    }

    return (

        <SafeAreaView>
            <View>
                <Button title="Voltar" color={'#BE6A40'}
                    onPress={handleBack} />
                <Text>Fazer Download da Tabela</Text>
                <TouchableOpacity
                            style={styles.button}
                            onPress={handleNext}>

                            <Text style={styles.textButton}>Fazer Upload Novamente</Text>

                        </TouchableOpacity>
            </View>
            <View>
                <Image source={require('../../assets/logo.png')} />
            </View>

        </SafeAreaView>

    )
}