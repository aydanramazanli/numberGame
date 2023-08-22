import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

function StartGame() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputHandler(text) {
    setEnteredNumber(text);
  }

  function resetInput(){
    setEnteredNumber('')
  }
  function confirmHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Please enter a valid number 0-99", [{text:"Okay", style:"destructive", onPress:resetInput}])
      return;
    }
    console.log('Valid Number')
  }


  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputNumber}
        maxLength={2}
        multiline={false}
        underlineColorAndroid="transparent"
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={inputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton label="Reset" onPressBtn={resetInput}></PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            label="Start"
            onPressBtn={confirmHandler}
          ></PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#1981bc",
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
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
