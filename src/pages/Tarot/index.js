import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Tarot = () => {
  const nextPage = useNavigation();

  function handleNavigationCards() {
    nextPage.navigate('Cards');
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Vá quando estiver pronta</Text>
        <View style={styles.borderSubtitle}>
          <Text style={styles.subtitle}>Relaxe!</Text>
        </View>
      </View>
      <View style={styles.navigation}>
        <RectButton style={styles.button} onPress={handleNavigationCards}>
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
    justifyContent: 'space-evenly',
  },
  containerTitle: {
    marginHorizontal: 60,
  },
  subtitle: {
    color: '#eee',
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 48,
    fontFamily: 'PermanentMarker-Regular',
  },
  borderSubtitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderColor: '#9BC4D4',
    borderRadius: 500000,
    paddingVertical: 50,
    borderWidth: 3,
  },
  title: {
    marginTop: 16,
    marginBottom: 10,
    color: '#eee',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Ubuntu-Bold',
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

export default Tarot;
