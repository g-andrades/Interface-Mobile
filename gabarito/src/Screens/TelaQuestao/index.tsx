import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, Image, View, Platform, PermissionsAndroid, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';
import { LinearGradient } from "expo-linear-gradient";

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
            <LinearGradient colors={['#FFFF','#e9b9a1']} >
                    <View>
                        <TouchableOpacity style={styles.back} onPress={handleBack} >
                            <Image style={styles.imgback} source={require('../../assets/Arrowback.jpg')} />
                        </TouchableOpacity>

                        <Text style={styles.titulo} >Selecione o modelo de gabarito usado na avaliação</Text>
                    </View>
                    <View style={styles.alinhaview} > 
                        <View>
                            <TouchableOpacity style={styles.downloadt}></TouchableOpacity>
                                <Text style={styles.textdownloadt} >10 Questões</Text>
                            <TouchableOpacity style={styles.downloadt}></TouchableOpacity>
                                <Text style={styles.textdownloadt} >30 Questões</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.downloadt}></TouchableOpacity>
                                <Text style={styles.textdownloadt} >20 Questões</Text>
                            <TouchableOpacity style={styles.downloadt} onPress={handleNext} ></TouchableOpacity>
                                <Text style={styles.textdownloadt} >40 Questões</Text>
                        </View>
                    </View>
                    <View>
                        <Image style={styles.img} source={require('../../assets/logo.png')} />
                    </View>
                </LinearGradient>
            </View>
        </SafeAreaView>

    )
}