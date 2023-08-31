import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function Home() {

    const [pontNos, setPontNos] = useState(0);
    const [pontEles, setPontEles] = useState(0);

    function handlePontAddNos() {
        setPontNos(pontNos + 1);
    }

    function handlePontAddEles() {
        setPontEles(pontEles + 1);
    }

    function handlePontRemoveNos() {
        setPontNos(pontNos - 1);
    }

    function handlePontRemoveEles() {
        setPontEles(pontEles - 1);
    }

    function handlePontZerar() {
        setPontNos(pontNos = 0);
        setPontEles(pontEles = 0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MARCADOR DE TRUCO</Text>

            <View style={styles.form}>

                <Text>Nós</Text>
                <Text>{pontNos}</Text>

                <TouchableOpacity
                    style={styles.buttonAddNos}
                    onPress={handlePontAddNos}>
                <Text style={styles.textAddNos}>+1</Text>

                <TouchableOpacity
                    style={styles.buttonRemoveNos}
                    onPress={handlePontRemoveNos}>
                    <Text style={styles.textRemoveNos}>-1</Text>
                </TouchableOpacity>

                </TouchableOpacity>
                <Text>Eles</Text>
                <Text>{pontEles}</Text>

                <TouchableOpacity
                    style={styles.buttonAddEles}
                    onPress={handlePontAddEles}>
                    <Text style={styles.textAddEles}>+1</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonRemoveEles}
                    onPress={handlePontRemoveEles}>
                    <Text style={styles.textRemoveEles}>-1</Text>
                </TouchableOpacity>

                <Text style={styles.zerar}>Zerar</Text>
              
            </View>

        </View>

    )
}