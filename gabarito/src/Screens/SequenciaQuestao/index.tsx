import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, Image, View, TouchableOpacity, Alert, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';
import { Alternative } from "@components/index";
import { useState } from "react";



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

        <SafeAreaView>
            <View>
                <View style={styles.viewBack}>
                    <Button title="<="
                        onPress={handleBack} />
                </View>

                <View>
                    <View>
                        <Text style={styles.title}>Coloque a sequência correta das questões</Text>
                        <TextInput
                            placeholder='Digite a alternativa correta'
                            placeholderTextColor={"#000"}
                            onChangeText={setAlternativeRight}
                            value={alternativeRight}
                        />

                        <TouchableOpacity
                            style={styles.button}
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
                            onPress={handleNext}>
                            <Text style={styles.uploadGabarito}>Upload do gabarito</Text>

                        </TouchableOpacity>
                    </View>


                </View>
            </View>

            <View>
                <Image source={require('../../assets/logo.png')} />
            </View>
        </SafeAreaView >

    )
}