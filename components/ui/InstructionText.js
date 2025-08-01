import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";


const InstructionText = (props) => {
  return (
    <View>
      <Text style={[styles.instructionText, props.style] }>{props.children}</Text>
    </View>
  )
}
export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans-r',
    color: Colors.accent500,
    fontSize: 18,
  },
})