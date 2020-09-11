import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import crazyTarot from '../../assets/images/crazyTarot.png';

const Result = () => {
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Image style={styles.tarotCard} source={crazyTarot} />
        <Text style={styles.title}>O Louco</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste
          adipisci iure autem, quos repellendus, tempore ex deserunt, in
          repudiandae voluptatum facilis ipsam provident ut? Non libero
          blanditiis magnam ex! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Distinctio ab illum dolore adipisci quis, dolores
          necessitatibus magni porro! Voluptatibus non perferendis laudantium
          dolores aliquam nemo quae accusamus nisi tempore sapiente!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    justifyContent: 'center',
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
