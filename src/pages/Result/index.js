import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import hatSmall from '../../assets/images/hatSmall.png';

import Api from '../../services/api';

const myIcon = <Icon name="arrow-left" size={25} color="#fff" />;

const Result = (props) => {
  const home = useNavigation();

  const [cards, setCards] = useState([]);

  function navegationHome() {
    home.navigate('Main');
  }

  useEffect(() => {
    Api.get(`cards/${props.route.params}`).then((response) => {
      setCards(response.data);
    });
  }, []);

  return (
    <>
      {cards.length === 0 ? (
        <View style={styles.container}>
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
        </View>
      ) : (
        <>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navegationHome()}
          >
            {myIcon}
          </TouchableOpacity>
          <View style={styles.container}>
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
            <Animatable.View
              useNativeDriver
              animation="slideInLeft"
              iterationCount={1}
              duration={500}
              style={styles.result}
            >
              <Image style={styles.tarotCard} source={{ uri: cards.image }} />
              <Text style={styles.title}>{cards.name}</Text>
              <Text style={styles.subtitle}>{cards.description}</Text>
            </Animatable.View>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    alignItems: 'center',
  },
  tarotCard: {
    marginVertical: 20,
    marginBottom: 20,
    height: 192,
    width: 100,
  },
  title: {
    borderRadius: 6,
    color: '#eee',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'PermanentMarker-Regular',
  },
  subtitle: {
    marginTop: 20,
    color: '#eee',
    textAlign: 'justify',
    fontSize: 18,
  },
  back: {
    paddingLeft: 30,
    paddingTop: 20,
  },
});

export default Result;
