import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, Image, View } from "react-native";


export function TelaQuestao() {

    const navigation = useNavigation()

    function handlePrevious() {
        navigation.navigate('home')
    }

    return (

        <View>
            <View>
                <Button title="Voltar" color={'#BE6A40'}
                    onPress={handlePrevious} />
                <Text>Download</Text>
                <Text>Selecione o modelo de gabarito usado na avaliação</Text>
            </View>
            <View>
                <Button title="1" color={'#FF7E2F'} />
                <Text>10 questões</Text>
                <Button title="2" color={'#FF7E2F'} />
                <Text>20 questões</Text>
                <Button title="3" color={'#FF7E2F'} />
                <Text>30 questões</Text>
                <Button title="4" color={'#FF7E2F'} />
                <Text>40 questões</Text>
            </View>
            <View>
                <Image source={require('../Home/image.png')}></Image>
            </View>

        </View>

    )
}