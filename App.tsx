import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Image } from 'react-native';



export default function App() {
  const [nome, setName] = React.useState('')
  const [nameInput, setNameInput] = React.useState('')

  return (
    <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.titleStyle}>{nome}</Text>
        </View>
        <View style={styles.configImg}>
        <Image style={styles.image} source={require('./assets/pernambuco.jpg')} />
        </View>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 20, margin: 5 }}>Digite aqui!:</Text>
          <TextInput style={styles.input} value={nameInput} onChangeText={nameInput => setNameInput(nameInput)} textAlign={'center'} />
          <Button title="Confirmar" onPress={() => setName(nameInput)} />
        </View>
        <StatusBar style="auto" />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    color:'green',
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    width: 250,
    alignSelf: 'center',
  },
  configImg: {
    width: 220,
    height: 220,
    borderRadius: 200 / 2,
    alignSelf: 'center',
    margin: 30,
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  }
});