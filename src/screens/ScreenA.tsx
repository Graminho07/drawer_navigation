import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function ScreenA() {
  const navigation = useNavigation();

  function openScreen(){
    navigation.navigate('screenB', { name: 'Ir para tela C'})
  }
  return (
    <View style={styles.container}>
            <Button
            title="Ir para Tela B"
            color="blue"
            onPress={openScreen}
            ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
    }
})                                     