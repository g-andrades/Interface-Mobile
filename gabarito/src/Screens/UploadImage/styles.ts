import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({

camera : {
    flex: 1,
},

buttonUpload : {
    height:70,
    backgroundColor: '#BE6A40',
    color:'#ffff',
    paddingLeft: 16,
    borderRadius: 5,
    fontSize: 18,
    alignItems : 'center',
    justifyContent: 'center',
    flexDirection : 'row',
},

buttonCamera : {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    height: 50
},
viewModal : {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    margin: 20
},
buttonTouchable:{
    margin: 10,
}
})