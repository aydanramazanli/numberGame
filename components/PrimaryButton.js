import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ label, onPressBtn }) {
  
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed})=>pressed?[styles.buttonInner,styles.pressed]:styles.buttonInner}
        onPress={onPressBtn}
        android_ripple={{ color: "3E4D8F" }}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInner: {
    borderRadius: 28,
    backgroundColor: "#39a3e4",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation:2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
