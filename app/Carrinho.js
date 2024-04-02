import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    subtitulo: {
        backgroundColor: '#FB76D6',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 10,
        height: 83,
        width: 220,
        marginTop: 30,

    },
    textoSub: {
        textAlign: 'left',
        marginLeft: 7,
        fontSize: 22,
    },

    card: {
        backgroundColor: '#E8E0E5',
        height: 203,
        width: 634,
    },
    cardImg: {
        height: 167,
        width: 167,
        alignSelf: 'left',
        marginTop: 10,
        marginLeft: 10,
    },
    cardTit: {
        textAlign: 'left',
        marginLeft: 15,
        fontSize: 17,
    },
    cardPreco: {
        textAlign: 'left',
        marginLeft: 1,
        fontSize: 17,
    },

    botao: {
        backgroundColor: '#1E9C09',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        height: 31,
        width: 139,
    },
    botaoText: {
        textAlign: 'center',
        fontSize: 11,
    }
})

export default function Agendar() {
    return(
        <>
            <View style={styles.subtitulo}>
                <Text style={styles.textoSub}>Carrinho</Text>
            </View>

            <View style={styles.card}>
                <Image source={} style={styles.cardImg}/>
                <Text style={styles.cardTit}></Text>
                <Text style={styles.cardPreco}></Text>

                <TouchableOpacity styles={styles.botao}>
                    <Text styles={styles.botaoText}>Ver mais</Text> 
                </TouchableOpacity>
                
                <TouchableOpacity styles={styles.botao}>
                    <Text styles={styles.botaoText}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}