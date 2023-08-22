import StartGame from "./screens/StartGame";
import { StyleSheet, ImageBackground} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={['#ca820b', '#f3a72a','#fff089' ]} style={styles.screen}>
      <ImageBackground source={require('./assets/images/background.jpg')} resize="cover" style={styles.screen} imageStyle={styles.background}>
      <StartGame />
      </ImageBackground>
     
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
  },
  background:{opacity:0.10}
});
