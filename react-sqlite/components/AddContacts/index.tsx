import { useState } from "react"; 
import { Button, Text, TextInput, View } from "react-native";
import { addContact } from "../../db/database";

export function AddContacts(){

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    function handleAddContact(){
        
        addContact(name, phone)
        setName('')
        setPhone('')

    }

    return (

           <View>
            <Text>Nome</Text>
            <TextInput value ={name} onChangeText={setName}/>
             
            <Text>Telefone</Text>
            <TextInput value ={phone} onChangeText={setPhone}/>

            <Button title="Adicionar Contato" onPress={handleAddContact}/>

        </View>
    )
}