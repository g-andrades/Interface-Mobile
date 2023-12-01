import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({

    title: {
    fontSize: 25,
    textAlign: "center",
    color: '#BE6A40',
    fontWeight: 'bold',
    marginTop: 150,
    marginBottom: 100,
    marginLeft: 20,
    marginRight: 20,
  },

  button:{
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#BE6A40',
    color:'#FFFF',
    alignItems:"center",
    justifyContent:'center',
    marginLeft: 70,
    borderRadius: 20,
    width: 250,
    height: 55,
  },

  titulo:{
    color: '#000',
    fontSize: 20,
    fontWeight:'bold',
    marginTop:35,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
    textAlign: "center",
  },

  img:{
    marginTop: 60,
    marginLeft: 90,
  },

  imgback:{
    marginTop: 5,
    marginLeft: 5,
  },

  back:{
    borderRadius: 20,
    width: 250,
    height: 55,
    
  },

  alinhaview:{
    flexDirection:'row',
  },
  
  downloadt:{
    borderRadius: 20,
    width: 150,
    height: 150,
    backgroundColor: '#BE6A40',
    margin: 20,
  },

  imgdownload:{
    marginLeft: 5,
    marginTop: 10,
    marginRight: 'auto',
  
  },

  textdownloadt:{
    marginLeft:57,
    marginTop:1,
    fontWeight: 'bold',
    fontSize: 12,
  },

})