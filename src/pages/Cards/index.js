import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import hatSmall from '../../assets/images/hatSmall.png';

// import { Container } from './styles';
import card from '../../assets/images/cards2.png';

const AnimatedCards = Animatable.createAnimatableComponent(RectButton);

const Cards = () => {
  const [weight] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const nextPage = useNavigation();

  function handleNavigationResult(w) {
    const valueWeight = Math.floor(Math.random() * (21 - w + 1)) + w;

    nextPage.navigate('Result', valueWeight);
  }

  return (
    <View style={styles.conteiner}>
      <View style={styles.conteinerImage}>
        <Animatable.Image
          source={hatSmall}
          useNativeDriver
          animation="slideInDown"
          iterationCount={1}
          duration={1000}
        />
        {/**
         * Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
         */}

        <Text style={styles.title}>Escolha uma carta</Text>
      </View>
      <Animatable.View style={styles.conteinerCards}>
        {weight.map((w) => (
          <AnimatedCards
            onPress={() => handleNavigationResult(w)}
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
  conteinerImage: {
    marginVertical: 30,
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
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
