import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({ roundedNumber, guess }) =>{
  return (
    <View style={styles.listItem}>
      <Text>#{roundedNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4, // for android shadow.
    // ios shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: .25,
    shadowRadius: 3,

    borderColor: Colors.primaryBg800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
  },

  itemText: {
    fontFamily: 'open-sans-r',
  },
})
