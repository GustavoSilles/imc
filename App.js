import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalculadorTemperatura from './src/componentes/Imc';

export default function App() {

  return (
    <View style={styles.container}>
      <CalculadorTemperatura/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
  }
})
