import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, Image, View , TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';

//PAG 03
export function DownloadGabarito() {

    const navigation = useNavigation()

    function handleBack(){
        //desempilha
        navigation.navigate('telaquestao')
    }

    return (

        <SafeAreaView style={styles.background}>
            <View>
                <TouchableOpacity style={styles.back} onPress={handleBack} >
                    <Image style={styles.imgback} source={require('../../assets/flechaback.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <Image style={styles.imgdownload} source={require('../../assets/Download.png')} />
            </View>
            <View>
                <Image style={styles.imggabarito} source={require('../../assets/gabaritoteste2.png')} />
            </View>
        </SafeAreaView>

    )
}