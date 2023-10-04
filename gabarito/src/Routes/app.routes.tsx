import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../Screens/Home"
import { TelaQuestao } from "../Screens/TelaQuestao"

export function AppRoutes(){

    const {Navigator, Screen} = createNativeStackNavigator()

    return(

        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="home" component={Home}/>
            <Screen name="telaquestao" component={TelaQuestao}/>
        </Navigator>

    )


}