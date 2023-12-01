import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016'
  },

  title: {
    color: '#ffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    backgroundColor: '#BE6A40',
    textAlign: 'center'
  },

  titulo:{
    color: '#FFF',
    fontSize: 20,
    textAlign:'center',
    fontWeight:'bold',
  },

  buttonadd: {
    height: 30,
    width: 30,
    backgroundColor: '#BE6A40',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
  },

  buttontop:{
    marginTop: 50,
    marginBottom: 10,
    backgroundColor: '#BE6A40',
    color:'#FFFF',
    alignItems:"center",
    justifyContent:'center',
    marginLeft: 40,
    borderRadius: 20,
    width: 300,
    height: 55,
  },

  buttonbottom:{
    marginTop: 300,
    marginBottom: 10,
    marginLeft: 40,
    backgroundColor: '#BE6A40',
    color:'#FFFF',
    alignItems:"center",
    justifyContent:'center',
    borderRadius: 20,
    width: 300,
    height: 55,
  },

  input: {
    height: 56,
    backgroundColor: '#BE6A40',
    paddingLeft: 16,
    borderRadius: 5,
    fontSize: 18,

  },
  viewBack: {
    height: 50,
    width: 35,
    color: 'black'
  },

  textButton: {
    fontSize: 15,
    textAlign: "center",
    color: '#fff'
  },

  uploadGabarito: {
    height: 60,
    borderRadius: 10,
    fontSize: 24,
    textAlign: "center",
    color: '#fff',
    backgroundColor: '#BE6A40',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img:{
    marginTop: 10,
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
  },



})