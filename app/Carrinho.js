import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
});

export default function Carrinho({ updateCarrinho }) {
    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        const getItensCarrinho = async () => {
            try {
                const carrinhoData = await AsyncStorage.getItem('CARRINHO');
                if (carrinhoData !== null) {
                    setCarrinho(JSON.parse(carrinhoData));
                }
            } catch (error) {
                console.error('Erro ao obter itens do carrinho:', error);
            }
        };

        getItensCarrinho();
    }, []);

    const handleExcluirItem = async (index) => {
        try {
            const novoCarrinho = [...carrinho];
            novoCarrinho.splice(index, 1);
            await AsyncStorage.setItem('CARRINHO', JSON.stringify(novoCarrinho));
            setCarrinho(novoCarrinho);
            updateCarrinho(); 
        } catch (error) {
            console.error('Erro ao excluir item do carrinho:', error);
        }
    };

    return (
        <>
            <View style={styles.subtitulo}>
                <Text style={styles.textoSub}>Carrinho</Text>
            </View>
            {carrinho.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Image source={{ uri: item.imagem }} style={styles.cardImg}/>
                    <Text style={styles.cardTit}>{item.nome}</Text>
                    <Text style={styles.cardPreco}>{item.preco}</Text>
                    <TouchableOpacity style={styles.botao} onPress={() => handleExcluirItem(index)}>
                        <Text style={styles.botaoText}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </>
    );
}
