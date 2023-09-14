import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";

type Props = {
    pessoa: number
    tittle: String
}

export default function Score(props: Props){
    return(
        <View style={style.container}>
            <Text>{props.tittle}</Text>
            <Text>{props.pessoa}</Text>
        </View>
    )
}