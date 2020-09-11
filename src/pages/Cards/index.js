import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

// import { Container } from './styles';
import card from '../../assets/images/cards2.png';

const AnimatedCards = Animatable.createAnimatableComponent(RectButton);

const Cards = () => {
  const [weight, setWeight] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  return (
    <View style={styles.conteiner}>
      <View>
        <Text style={styles.title}>Escolha uma carta</Text>
      </View>
      <Animatable.View style={styles.conteinerCards}>
        {weight.map((w) => (
          <AnimatedCards
            key={w}
            useNativeDriver
            animation="slideInLeft"
            iterationCount={1}
            duration={w * 200}
          >
            <Image style={styles.cards} source={card} />
          </AnimatedCards>
        ))}
      </Animatable.View>
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
