import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
// import { Container } from './styles';
import card from '../../assets/images/cards2.png';

const Cards = () => {
  return (
    <View style={styles.conteiner}>
      <View>
        <Text style={styles.title}>Escolha uma carta</Text>
      </View>
      <View style={styles.conteinerCards}>
        <RectButton>
          <Image style={styles.cards} source={card} />
        </RectButton>
        <RectButton>
          <Image style={styles.cards} source={card} />
        </RectButton>
        <RectButton>
          <Image style={styles.cards} source={card} />
        </RectButton>
        <RectButton>
          <Image style={styles.cards} source={card} />
        </RectButton>
        <RectButton>
          <Image style={styles.cards} source={card} />
        </RectButton>
        <RectButton>
          <Image style={styles.cards} source={card} />
        </RectButton>
        <RectButton>
          <Image style={styles.cards} source={card} />
        </RectButton>
        <RectButton>
          <Image style={styles.cards} source={card} />
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    padding: 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 60,
  },
  title: {
    marginVertical: 30,
    color: '#eee',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 25,
  },
  cards: {
    margin: 6,
  },
  conteinerCards: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Cards;
