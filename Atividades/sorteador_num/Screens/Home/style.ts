import { StyleSheet } from  'react-native';

export const style = StyleSheet.create({
    container : {
      flex: 1 ,
      padding:24,
      backgroundColor:'#383535'
    },
    date : {
      color:'#fff'
    }, 
    input : {
      width: 150,
      height: 60,
      backgroundColor: '#fff',
      color: '#8C4FCA',
      padding: 16,
      borderRadius: 9,  
      fontSize: 20,
      textAlign:'center',
  
    },

    bttResp:{
      width: 300,
      height: 50,
      backgroundColor: '#04D361',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      borderRadius: 10,
    },

    textResp:{
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
    },

    inputt:{

      justifyContent:'center',
      alignItems: 'center',

    },
    
    count :{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    acerto : {
      color:'#4EA8DE',
      fontSize:15,
      fontWeight:'bold',
      marginTop:2
    },

    erro : {
      color:'#D34C6C',
      fontSize:15,
      fontWeight:'bold',
      marginTop:2
    },

    form: {
      height: 80,
      marginTop: 30,
      flexDirection: 'column'
    },

    placar:{
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,

    },

    pontos:{
      fontSize: 22,
      color: '#fff',
      padding: 10,
    },

    button : {
      height:50,
      borderRadius: 10,
      backgroundColor: '#5D5FEF',
      alignItems: 'center',
      justifyContent: 'center'
    },

    textButton : {
      fontSize: 20,
      color: '#fff'
    },
    
    separator: {
      height: 1,
      backgroundColor: '#ECEDF0', // Cor da linha
      marginVertical: 10, // Espaçamento vertical
      marginBottom: 50,
    },

    title:{
      color: '#fff',
      fontSize: 18,
      margin: 20,
    },

    calculo:{
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      
    },

    calc:{
      color: '#fff',
      fontSize: 28,
   
    },
    bloc:{
      width:90,
      height:70,
      borderRadius: 20,
      backgroundColor: '#4AA5F9',
      justifyContent: 'center',
      alignItems: 'center',
    },

    zerar: {
      marginTop: 40,
      borderRadius: 10,
      width: 200,
      height: 40,
      backgroundColor: '#ff0000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    nwGame: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center'

    },

    bttZerar: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      textAlign:'center',
    
    },
  
})
