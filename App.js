import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rodape from './components/Rodape';
import Cabecalho from './components/Cabecalho';
import Card1 from './assets/Card1.jpeg';
import Card2 from './assets/Card2.jpeg';
import Card3 from './assets/Card3.jpeg';
import Agendar from './app/Agendar';

const styles = StyleSheet.create({
  texto: {
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    fontSize: 18,
  },
  card: {
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 0,
    padding: 10,
    backgroundColor: '#FB76D6',
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 30,
  },
  textoCard: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    padding: 8,
  },
  imagem: {
    width: 150,
    height: 90,
    alignSelf: 'center',
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Agendar" component={Agendar} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <ScrollView>
        <Cabecalho />

        <Text style={styles.texto}>
          O MeowTarot nasceu com a missão de levar o acesso ao tarot a todos,
          independente de gênero, classe, raça ou crença.
        </Text>

        <CartaoDeNavegacao image={Card1} texto="Agende um atendimento" destino="Agendar" />
        <CartaoDeNavegacao image={Card2} texto="Saiba mais sobre tarot" destino="SaibaMais" />
        <CartaoDeNavegacao image={Card3} texto="Previsão mensal grátis" destino="PrevisaoMensal" />
      </ScrollView>

      <Rodape />
    </SafeAreaView>
  );
}

function CartaoDeNavegacao({ image, texto, destino }) {
  const navigation = useNavigation();

  const navigateToDestino = () => {
    navigation.navigate(destino);
  };

  return (
    <TouchableOpacity onPress={navigateToDestino}>
      <View style={styles.card}>
        <Image source={image} style={styles.imagem} />
        <Text style={styles.textoCard}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
}
