import { View, Text, StyleSheet, Pressable } from "react-native";
const PrimaryButton = ({ children, onPress }) => {

   
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={onPress} 
                android_ripple={{color: '#f23434ff'}}
                style={({ pressed })=> pressed ? [styles.buttonInnerContainer, styles.pressedIOS]: styles.buttonInnerContainer}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
        
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#791919ff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressedIOS: {
        opacity: 0.75,
    }
})