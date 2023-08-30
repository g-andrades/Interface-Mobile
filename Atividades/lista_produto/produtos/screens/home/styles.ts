import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container : {
      flex:1, padding:24, backgroundColor:'#131016'},
  
    title : {
      color:'#ffff',
      fontSize:24,
      fontWeight:'bold',
      marginTop:48
    },
  
    data : {
      color:'#fff',
      fontSize: 14
    },

    input : {
        height:56,
        backgroundColor: '#1f1e25',
        color:'#fff',
        paddingLeft: 16,
        borderRadius: 5,
        fontSize: 18,
       
    },

    button : {
        height:70,
        backgroundColor: '#31cf67',
        color:'#fff',
        paddingLeft: 16,
        borderRadius: 5,
        fontSize: 18,
        alignItems : 'center',
        justifyContent: 'center',
        flexDirection : 'row',
       
    },

    textButton : {
       fontSize : 28,
       color: '#fff',
    },

    form : {
        marginTop : 10,
        height: 200,
        width: '100%'
    }, 

    listEmpty:{
    color: '#fff',

    }
  })