import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Alert} from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState("Digite aqui!");
  return (
    <View style={styles.container}>
      <Image source={require('./assets/react.png')} />
      <TextInput
        onChangeText={onChangeText}
        value={text}
      />
      <Button
      title="Pressione"
      onPress={() => Alert.alert(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
