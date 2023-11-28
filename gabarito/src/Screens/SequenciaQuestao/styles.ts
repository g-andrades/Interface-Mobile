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

  button: {
    height: 30,
    width: 50,
    backgroundColor: '#BE6A40',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
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

})