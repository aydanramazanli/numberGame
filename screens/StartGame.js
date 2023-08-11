import { View, TextInput, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton"

function StartGame() {
    
  return (
    <View>
      <TextInput />
      <PrimaryButton label="Change"></PrimaryButton>
      <PrimaryButton label="Start"></PrimaryButton>

    </View>
  );
}

export default StartGame;
