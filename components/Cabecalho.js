import {Image, View, StyleSheet} from 'react-native';
import Icon from '../assets/Icon.jpeg'
import User from "../assets/user1.png"
import Carrinho from "../assets/Carrinho2.png"

const styles = StyleSheet.create({
      cabecalho: {
      backgroundColor: '#45E3E3', 
      paddingVertical: 10, 
      paddingHorizontal: 20,
      left: 0, 
      right: 0,
      alignItems: 'center',
      marginTop: 35,
      flex: 1,
      flexDirection: 'row'
  },
  imagem: {
     width: 40, 
     height: 40,
     marginRight: 25
  },
  icones: {
    flexDirection: 'row', 
    marginLeft: 'auto'
  }
})

export default function Cabecalho() {
  return (
    <>
      <View style={styles.cabecalho}>
        <View>
          <Image source={Icon} style= {{width: 60, height: 60}}/>
        </View>

        <View style= {styles.icones}>
          <Image source={Carrinho} style= {styles.imagem}/>
          <Image source={User} style={styles.imagem}/>
        </View>
      </View>
    </>
  )}