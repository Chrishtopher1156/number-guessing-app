import { Text, StyleSheet } from "react-native"


const Title = ({ children }) => {
  return <Text style={styles.title}>{ children }</Text>
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-b',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 6,
    padding: 12,
 }
})