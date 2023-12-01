import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, Image, View, TouchableOpacity, Alert, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';
import { Alternative } from "@components/index";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";



//PAG 04
export function SequenciaQuestao() {

    const navigation = useNavigation()

    function handleBack() {
        //desempilha
        navigation.navigate('home')
    }
    function handleNext() {
        navigation.navigate('uploadimage')
    }


    const [alternative, setalternative] = useState<String[]>([]);
    const [alternativeRight, setAlternativeRight] = useState('');



    function handleAlternativeAdd() {
        setalternative([...alternative, alternativeRight])
        setAlternativeRight('')
    }

    return (

        <SafeAreaView >
            <LinearGradient colors={['#FFFF', '#e9b9a1']} >
                <View>
                    <TouchableOpacity style={styles.back} onPress={handleBack} >
                            <Image style={styles.imgback} source={require('../../assets/flechaback.png')} />
                            
                    </TouchableOpacity>

                    <View>
                        <View>
                            <TouchableOpacity style={styles.buttontop} onPress={handleNext}>
                                <Text style={styles.titulo} > Coloque a sequência das respostas </Text>
                            </TouchableOpacity>

                            <TextInput
                                placeholderTextColor={"#000"}
                                onChangeText={setAlternativeRight}
                                value={alternativeRight}
                            />

                            <TouchableOpacity
                                style={styles.buttonadd}
                                onPress={handleAlternativeAdd}>

                                <Text style={styles.textButton}> +</Text>

                            </TouchableOpacity>
                            <FlatList
                                data={alternative}
                                keyExtractor={item => item}
                                renderItem={({ item }) => (
                                    <Alternative key={item}
                                        name={item} />
                                )}
                            />
                            <TouchableOpacity
                                style={styles.buttonbottom}
                                onPress={handleNext}>
                                <Text style={styles.titulo}>Upload do gabarito</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View>
                    <Image style={styles.img} source={require('../../assets/logo.png')} />
                </View>
            </LinearGradient>
        </SafeAreaView >

    )
}