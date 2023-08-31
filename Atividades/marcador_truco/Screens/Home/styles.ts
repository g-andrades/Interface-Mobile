
import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 24, backgroundColor: '#131016'
  },

  title: {
    color: '#ffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },


  buttonAddNos: {
    height: 75,
    width: 75,
    backgroundColor: '#31cf67',
    color: '#fff',
    paddingLeft: 16,
    borderRadius: 5,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

  },

  buttonAddEles: {
    height: 75,
    width: 75,
    backgroundColor: '#31cf67',
    color: '#fff',
    paddingLeft: 16,
    borderRadius: 5,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

  },
  buttonRemoveNos: {
    height: 75,
    width: 75,
    backgroundColor: '#BD1010',
    color: '#fff',
    paddingLeft: 16,
    borderRadius: 5,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

  },

  buttonRemoveEles: {
    height: 75,
    width: 75,
    backgroundColor: '#cc0000',
    color: '#fff',
    paddingLeft: 16,
    borderRadius: 5,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 50

  },

  textAddNos: {
    fontSize: 28,
    color: '#fff',
  },

  textAddEles: {
    fontSize: 28,
    color: '#fff',
  },
  textRemoveNos: {
    fontSize: 28,
    color: '#fff',
    
  },
  textRemoveEles: {
    fontSize: 28,
    color: '#fff',
  },

  form: {
    marginTop: 10,
    height: 200,
    width: '100%'
  },

  zerar: {
    color: '#fff',
    backgroundColor: '#DE9609',
    paddingLeft: 16,
    borderRadius: 5,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 150

  }
})