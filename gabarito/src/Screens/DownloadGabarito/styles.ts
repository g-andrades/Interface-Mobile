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

  background:{
    flex:1,
    backgroundColor: '#FFFF',
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
    color: '#FFF',
    fontSize: 20,
    fontWeight:'bold',
  },

  img:{
    marginTop: 200,
    alignItems:"center",
    justifyContent:'center',
    marginLeft: 85,
  },

  back:{
    borderRadius: 20,
    width: 250,
    height: 55,
  },

  imgback:{
    marginTop: 5,
    marginLeft: 5,
    width: 50,
    justifyContent: 'flex-start',
  },

  imggabarito:{
    marginTop:30,
    marginLeft: 15,
    width: 370,
    justifyContent: 'flex-start',
  },

  imgdownload:{
    marginTop: -40,
    marginLeft: 340,
    width: 50,
    justifyContent: 'flex-end',
  },

})