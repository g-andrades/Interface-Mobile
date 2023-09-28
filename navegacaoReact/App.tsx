import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/Screens/Home';
import { Register } from './src/Screens/Register';
import { Result } from './src/Screens/Result';
import { Routes } from './src/Routes';

export default function App() {
  return (
  
      <Routes/>

      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
