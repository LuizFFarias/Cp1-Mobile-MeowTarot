import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rodape: {
    backgroundColor: '#45E3E3', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
  },
  sala: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  nome: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
})

export default function Rodape() {
  return (
    <>
      <View style={styles.rodape}>
        <Text style={styles.sala}>2TDSPF</Text>
        <Text style={styles.nome}>Rafaella Monique do Carmo Bastos - 552424</Text>
        <Text style={styles.nome}>Luiz Fillipe Farias - 99519</Text>
      </View>
    </>
)}