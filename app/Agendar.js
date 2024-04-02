import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Agnd1 from "../assets/Agend1.png";
import Agnd2 from "../assets/Agend2.png";
import Agnd3 from "../assets/Agend3.png";
import Agnd4 from "../assets/Agend4.png";
import Agnd5 from "../assets/Agend5.png";

const styles = StyleSheet.create({
    subtitulo: {
        backgroundColor: '#FB76D6',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 10,
        height: 83,
        width: 459,
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
        marginBottom: 50, 
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

export default function Agendar() {
    const [opcSelecionada, setOpcSelecionada] = useState(null);
    const [agendamentos, setAgendamentos] = useState([]);

    const handleOpcSelecionada = async (preco) => {
        try {
            let agendamentos = [];
            if (await AsyncStorage.getItem("CARRINHO") !== null) {
                agendamentos = JSON.parse(await AsyncStorage.getItem("CARRINHO"));
            }
            agendamentos.push(preco);
            await AsyncStorage.setItem('CARRINHO', JSON.stringify(agendamentos));
            setOpcSelecionada(preco);
            Alert.alert('Sucesso', 'Agendamento adicionado com sucesso!');
        } catch (error) {
            console.error('Erro ao armazenar o preço:', error);
        }
    };

    const getAgendamentos = async () => {
        try {
            const agendamentos = await AsyncStorage.getItem('CARRINHO');
            if (agendamentos !== null) {
                setAgendamentos(JSON.parse(agendamentos));
            }
        } catch (error) {
            console.error('Erro ao recuperar os agendamentos:', error);
        }
    };

    useEffect(() => {
        getAgendamentos();
    }, []);

    return(
        <>
            <ScrollView>
                <View style={styles.subtitulo}>
                    <Text style={styles.textoSub}>Agende um atendimento</Text>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity onPress={() => handleOpcSelecionada('Alecrim Dourado - R$ 16,00')}>
                        <Image source={Agnd1} style={styles.cardImg}/>
                        <Text style={styles.cardTit}>Alecrim dourado</Text>
                        <Text style={styles.cardPreco}>R$16,00</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity onPress={() => handleOpcSelecionada('Perguntas avulsas - R$10,00')}>
                        <Image source={Agnd2} style={styles.cardImg}/>
                        <Text style={styles.cardTit}>Perguntas avulsas</Text>
                        <Text style={styles.cardPreco}>R$10,00</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity onPress={() => handleOpcSelecionada('Leitura da estrela - R$32,00')}>
                        <Image source={Agnd3} style={styles.cardImg}/>
                        <Text style={styles.cardTit}>Leitura da estrela</Text>
                        <Text style={styles.cardPreco}>R$32,00</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity onPress={() => handleOpcSelecionada('Conselho - R$4,00')}>
                        <Image source={Agnd4} style={styles.cardImg}/>
                        <Text style={styles.cardTit}>Conselho</Text>
                        <Text style={styles.cardPreco}>R$4,00</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity onPress={() => handleOpcSelecionada('Leitura da corte - R$34,00')}>
                        <Image source={Agnd5} style={styles.cardImg}/>
                        <Text style={styles.cardTit}>Leitura da corte</Text>
                        <Text style={styles.cardPreco}>R$34,00</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </>
    )
}
