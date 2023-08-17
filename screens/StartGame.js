import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGame() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.inputNumber} maxLength={2}  multiline={false}
  underlineColorAndroid="transparent" keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}/>
      <PrimaryButton label="Change"></PrimaryButton>
      <PrimaryButton label="Start"></PrimaryButton>
    </View>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#4B5DAC",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    //android
    elevation: 10,
  },
  inputNumber: {
    height: 50,
    width: 50,
    fontSize: 32,
    color:"white",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
   
  },
});
