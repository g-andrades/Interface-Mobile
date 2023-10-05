import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "src/Screens/Home"
import { Register } from "src/Screens/Register"
import { Result } from "src/Screens/Result"




export function AppRoutes(){

    const {Navigator, Screen} = createNativeStackNavigator()

    return(

        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="home" component={Home}/>
            <Screen name="register" component={Register}/>
            <Screen name="result" component={Result}/>
        </Navigator>

    )


}