import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import magic from '../../assets/images/magic.png';

const Main = () => {
  const nextPage = useNavigation();

  function handleNavigationRelax() {
    nextPage.navigate('Tarot');
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Tarot</Text>
        <Image source={magic} />
        <Text style={styles.title}>Bruxinha</Text>
      </View>
      <View style={styles.navigation}>
        <RectButton style={styles.button} onPress={handleNavigationRelax}>
          <Text style={styles.textButton}>Jogar</Text>
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    justifyContent: 'space-around',
    marginBottom: 60,
  },
  title: {
    marginTop: 16,
    borderRadius: 6,
    color: '#eee',
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'PermanentMarker-Regular',
  },
  navigation: {
    flexDirection: 'row',
  },
  button: {
    height: 60,
    flex: 1,
    backgroundColor: '#9BC4D4',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  textButton: {
    color: '#FFF',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
  },
});

export default Main;
