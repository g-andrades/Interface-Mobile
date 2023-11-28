import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props ={
    name: String,
    onAdd: () => void
}

export function Alternative(props : Props){
    
    return(
        <View style={styles.container}>

            <Text style={styles.name}>{props.name}</Text>

            <TouchableOpacity style={styles.button}
                onPress = {props.onAdd}>
            </TouchableOpacity>

        </View>
    )
}