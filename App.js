import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOver';
import Colors from './constants/colors';


export default function App() {
  const[userNumber, setUserNumber]=useState(null);
  const[gameIsOver, setGameIsOver]=useState(true);
  const[guessRounds, setGuessRounds]=useState(0);

  // fonts
  const [fontsLoaded] =useFonts({
    'open-sans-b': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-r': require('./assets/fonts/OpenSans-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }
  
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  function GameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }



  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={GameOverHandler}/>
  }



  // game over
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen 
      userNumber={userNumber} 
      roundsNumber={guessRounds} 
      onStartNewGame={startNewGameHandler} 
    />
  }

  return (
    <LinearGradient colors={[ Colors.primaryBg700, Colors.accent500 ]} style={styles.rootScreen}>
        <ImageBackground 
          source={require('./assets/images/background.jpg')} 
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
    
    </LinearGradient>
    
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }, 
  backgroundImage: {
    opacity: 0.15,
  }
})


