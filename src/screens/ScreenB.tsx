import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Button, Text } from 'react-native';

type ParamsProps = {
  name: string;
}

export function ScreenB() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('screenC', { name: 'Bem vindo a Tela C!' });
  }

  return (
    <View style={styles.container}>
      <Button
        title="Ir para Tela C"
        color="blue"
        onPress={openScreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
  },
});                