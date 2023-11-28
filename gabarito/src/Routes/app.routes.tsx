import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../Screens/Home"
import { TelaQuestao } from "../Screens/TelaQuestao"
import { DownloadGabarito } from "../Screens/DownloadGabarito"
import { SequenciaQuestao } from "../Screens/SequenciaQuestao"
import { UploadImage } from "../Screens/UploadImage"

export function AppRoutes(){

    const {Navigator, Screen} = createNativeStackNavigator()

    return(

        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="home" component={Home}/>
            <Screen name="telaquestao" component={TelaQuestao}/>
            <Screen name="downloadgabarito" component={DownloadGabarito}/>
            <Screen name="sequenciaquestao" component={SequenciaQuestao}/>
            <Screen name="uploadimage" component={UploadImage}/>
        </Navigator>

    )


}