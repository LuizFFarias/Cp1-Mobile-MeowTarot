//Rafaella Monique do Carmo Bastos - 552425
//Luiz Fillipe Farias - 99519

import React from 'react';
import { View, StyleSheet, Text, Image, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import Rodape from './components/Rodape';
import Cabecalho from './components/Cabecalho';
import Card1 from "./assets/Card1.jpeg";
import Card2 from "./assets/Card2.jpeg";
import Card3 from "./assets/Card3.jpeg";

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
    fontSize: 15,
  },
  imagem: {
    width: 150,
    height: 90,
    alignSelf: 'center',
  }
});

export default function App() {
  return (
    <>
    <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <ScrollView>
        <Cabecalho />

        <Text style={styles.texto}>O MeowTarot nasceu com a missao de levar o acesso ao tarot a todos, independente de genero, classe, raca ou crenca.</Text>

       

        <View style={styles.card}>
          <Image source={Card1} style= {styles.imagem}/>
         <Text style={styles.textoCard}>Agende um atendimento</Text>
        </View>

        <View style={styles.card}>
          <Image source={Card2} style={styles.imagem}/>
          <Text style={styles.textoCard}>Saiba mais sobre tarot</Text>
        </View>

        <View style={styles.card}> 
          <Image source={Card3} style={styles.imagem}/>
          <Text style={styles.textoCard}>Previsao mensal gratis</Text>
        </View>
        </ScrollView>

        <Rodape />
        </SafeAreaView>
    </>
  );
}
