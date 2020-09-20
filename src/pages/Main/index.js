import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import hat from '../../assets/images/hat.png';

const Main = () => {
  const nextPage = useNavigation();

  function handleNavigationRelax() {
    nextPage.navigate('Tarot');
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={hat} />
        {/**
         * Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
         */}
        <Text style={styles.title}> Tarot Bruxinha</Text>
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
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    marginTop: 16,
    borderRadius: 6,
    color: '#eee',
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'PermanentMarker-Regular',
  },
  navigation: {
    flexDirection: 'row',
  },
  button: {
    height: 60,
    flex: 1,
    backgroundColor: '#BD80E1',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  textButton: {
    color: '#eee',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
    borderRadius: 6,
  },
});

export default Main;
