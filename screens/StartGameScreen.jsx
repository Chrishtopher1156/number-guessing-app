import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
const StartGameScreen = () => {
    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <View style={styles.buttonsContainer}>
               <View style={styles.button}>
                    <PrimaryButton>Reset</PrimaryButton>
               </View>
                <View style={styles.button}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
           
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 5, // only for android
        shadowColor: 'black', // only for ios
        shadowOffset: { width: 0, height: 2 }, // only for iso
        shadowRadius: 6, // only to ios
        shadowRadius: 0.25, // only to ios
        backgroundColor: '#2b0808ff',
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 25,
        borderBottomColor: '#ddb53f',
        borderBottomWidth: 1,
        color: '#ddb52f',
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1
    }

})