import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return (
    <View style={styles.inputContainer}>
    { children }
    </View>
 );
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 5, // only for android
    shadowColor: 'black', // only for ios
    shadowOffset: { width: 0, height: 2 }, // only for iso
    shadowRadius: 6, // only to ios
    shadowRadius: 0.25, // only to ios
    backgroundColor: Colors.primaryBg800,
  },
});