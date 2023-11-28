import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, Image, View, Platform, PermissionsAndroid, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//PAG 02
export function TelaQuestao() {

    const navigation = useNavigation();

    function handleBack() {
        navigation.navigate('home')
    }
    function handleNext() {
        navigation.navigate('downloadgabarito')
    }

    return (

        <SafeAreaView>
            <View>
                <Button title="<-" color={'#BE6A40'}
                    onPress={handleBack} />
                <Text>Modelo de Gabarito</Text>
            </View>
            <View>
                <Button title="Gabarito de 40 questões" color={'#FF7E2F'}
                    onPress={handleNext} />
            </View>
            <View>
                <Image source={require('../../assets/logo.png')} />
            </View>
        </SafeAreaView>

    )
}