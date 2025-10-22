import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const namiImage = require('./assets/logo-nami.png');

export default function App() {
  return (
    <View style={styles.contenedor}>
      <Image 
        source={namiImage}
        style={styles.logo} 
      />
      <View>
        <Text Text style={styles.titulo}>Nami</Text>
      </View>
      <View>
        <Text style={styles.bienvenida}>
          Bienvenido De Vuelta
        </Text>
      </View>
      <View style={styles.contenedorBlanco}>
        <Text></Text>
      </View>
    </View>
  );
}

// Aquí defines los estilos:
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#266cf6',
  },
  logo: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 150,

  }, 
  titulo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  bienvenida: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },
  
  contenedorBlanco: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 30,
    borderRadius: 50,
  },
});
  