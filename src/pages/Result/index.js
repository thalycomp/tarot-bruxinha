import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import hatSmall from '../../assets/images/hatSmall.png';
import Api from '../../services/api';

// import crazyTarot from '../../assets/images/crazyTarot.png';

const Result = (props) => {
  const [cards, setCards] = useState([]);

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
    padding: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    alignItems: 'center',
  },
  tarotCard: {
    marginVertical: 20,
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
});

export default Result;
