import { View, Text, Image, StyleSheet } from "react-native"

import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


const GameOverScreen =({ roundsNumber, userNumber, onStartNewGame })=> {
 return (
  <View style={styles.rootContainer}>
    <Title>Game Over</Title>
    <View style={styles.imageContainer}>
      <Image source={require('../assets/images/success.jpg')} style={styles.image} />
    </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hightlight}>{roundsNumber}</Text> rounded to 
        guess the number <Text style={styles.hightlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Strat New Button</PrimaryButton>
  </View>
 );
};

export default  GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 3,
    borderColor: Colors.primaryBg800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },

  summaryText: {
    fontFamily: 'open-sans-r',
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center'
  },
  hightlight: {
    fontFamily: 'open-sans-b',
    color: Colors.primaryBg500,
  }
})