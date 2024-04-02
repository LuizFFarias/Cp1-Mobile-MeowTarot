import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Icon from '../assets/Icon.jpeg';
import User from "../assets/user1.png";
import CarrinhoIcon from "../assets/Carrinho2.png";

const styles = StyleSheet.create({
    cabecalho: {
        backgroundColor: '#45E3E3', 
        paddingVertical: 10, 
        paddingHorizontal: 20,
        left: 0, 
        right: 0,
        alignItems: 'center',
        marginTop: 35,
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
});

export default function Cabecalho() {
    const navigation = useNavigation(); 

    const handleCarrinhoPress = () => {
        navigation.navigate('Carrinho'); 
    };

    return (
        <>
            <View style={styles.cabecalho}>
                <View>
                    <Image source={Icon} style={{ width: 60, height: 60 }}/>
                </View>

                <View style={styles.icones}>
                    <TouchableOpacity onPress={handleCarrinhoPress}>
                        <Image source={CarrinhoIcon} style={styles.imagem}/>
                    </TouchableOpacity>
                    <Image source={User} style={styles.imagem}/>
                </View>
            </View>
        </>
    );
}
