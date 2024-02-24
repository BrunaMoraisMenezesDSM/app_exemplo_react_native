import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function App() {
  return (<> {/* View sem estilo, somente para empilhar os componentes. Pois só pode ter um na raiz*/ }
      <StatusBar backgroundColor='#fff' />
      <SafeAreaView style={styles.container}>
        {/* referenciando o estilo criado */}
        <Text style={styles.estiloTexto}>Open up App.js to start working on your app!</Text>
        <Text style={styles.estiloTexto}> Meu primeiro app </Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', // horizontalmente
    justifyContent: 'flex-start', // verticalmente
    paddingTop: 35
  },
  estiloTexto: { // criando um novo estilo, atribuindo objetos
    fontSize: 30,
    color: '#000',
    fontWeight: '800'
  }
});
