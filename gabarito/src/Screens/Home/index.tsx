import { useNavigation } from "@react-navigation/native";
import { Button, Image, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';
import { LinearGradient } from "expo-linear-gradient";

export function Home() {


    const navigation = useNavigation()

    function handleNext() {
        navigation.navigate('telaquestao')
    }

    function handleNextCorrecao() {
        navigation.navigate('sequenciaquestao')
    }

    return (

        <SafeAreaView>
            <View style={styles.background}>
                <LinearGradient colors={['#FFFF', '#e9b9a1']} style={styles.background} >
                    <Text style={styles.title}>BEM-VINDO AO SCANNER DE GABARITO CESUL</Text>

                    <TouchableOpacity style={styles.button} onPress={handleNext}>
                        <Text style={styles.titulo} > Baixar gabaritos </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={handleNextCorrecao}>
                        <Text style={styles.titulo} > Corrigir provas </Text>
                    </TouchableOpacity>

                    <Image style={styles.img} source={require('../../assets/logo.png')} />
                </LinearGradient>
            </View>
        </SafeAreaView>
    )
}