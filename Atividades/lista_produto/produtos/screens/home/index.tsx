import {Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Products } from '../../components/products';
import { useState } from 'react';

export default function Home(){

    const [products, setProducts] = useState<String[]>([]);
    const [productsName, setProductsName] = useState('');

//os três pontos pegam o array e jogam para o objeto
// a função faz uma concatenação do array, o participants eh a lista atualizada enquanto o participantName pega o nome atual
    function handleProductsAdd(){

        if(productsName.trim().length > 0){//trim tira espaços em branco{
            
            if(productsName.includes(productsName)){//includes para verificar se tem nome igual
                return Alert.alert("Problema","-> Participante já existe")
                
            }
            setProducts([...products, productsName])
            setProductsName('')
            
        }else{
            Alert.alert("Problema ao adicionar participante", "-> Nome esta vazio")
        }
    }
//remover um participante
//a crase ` é usada para concatenar as strings
    function handlePartcipantRemove(name: String){
        Alert.alert('Remover', `Remover um participante ${name}`,
        [
            {
                text: 'Sim',
                onPress : () =>
                //prevStates é o estado atual da lista, ou seja, pega os dados da lista
                // filter serve para retorna somente os nomes diferentes ao que deseja remover
                    setProductsName(prevState => prevState.filter( partic => partic != name))
                    //igual a setParticipants(participants.filter( partics => partics != name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]
        )
    }

    return(
    <View style={styles.container}>
        <Text style={styles.title}>Nome do grupo</Text>
        <Text style={styles.data}> Quarta, 9 de Agosto </Text>
        
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='Informe um grupo'
                placeholderTextColor={"#ffff"}
                onChangeText={setProductsName} /* é uma função que captura e vai ser acionada as mudanças do estado do input.*/
                value={productsName} /* para pegar o valor do useState */
            />

            <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleProductsAdd}>
                <Text style={styles.textButton}> + </Text>

            </TouchableOpacity>
        </View>
        
        <Text style={styles.title}>Participantes</Text>
 
       {/*} <ScrollView>
        {
            participants.map(participant => (
                <Participant key={participant} name={participant} onRemove={handlePartcipantRemove}/>
            ))
        }
     </ScrollView>
    */}

        <FlatList
            data={products}
            keyExtractor={item => item}
            renderItem={ ({item}) =>(
                <Products key={item}     
                            name={item} 
                            onRemove={() => handlePartcipantRemove(item)}/>
            )}
            ListEmptyComponent={() =>
                <Text style={styles.listEmpty}>Sem participantes</Text>
            }
        />

  </View>

    )
}