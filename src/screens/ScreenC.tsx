import React from 'react';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { View, StyleSheet, Button, Text } from 'react-native';

type RootStackParamList = {
  ScreenC: { name: string };
};

type ScreenBRouteProp = RouteProp<RootStackParamList, 'ScreenC'>;

export function ScreenC() {
  const route = useRoute<ScreenBRouteProp>();
  const navigation = useNavigation();

  const { name } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, color: 'white' }}>
        {name}
      </Text>
      <Button
        title="Voltar para tela A"
        color="blue"
        onPress={() => navigation.goBack()}
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