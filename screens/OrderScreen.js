import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
  const navigation = useNavigation();
  const handleGoBackToHome = () => {
    navigation.navigate("Home"); // Navigate back to the "Home" screen
  };

  return (
    <View style={styles.container}>
    <SafeAreaView>
      <LottieView
        source={require("../assets/thumbs.json")}
        style={{
          height: 360,
          width:300,
          alignSelf: "center",
          marginTop: 40,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <Text
        style={{
          marginTop: 40,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Your order has been placed
      </Text>

      <LottieView
        source={require("../assets/sparkle.json")}
        style={{
          height: 300,
          position: "absolute",
          top: 100,
          width: 300,
          alignSelf: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <TouchableOpacity
          style={styles.button}
          onPress={handleGoBackToHome}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
    </SafeAreaView>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCFF",
    justifyContent: "flex-end", // Align content to the bottom of the container
  },
  button: {
    backgroundColor: "#34495E",
    padding: 10,
    margin: 300,
    marginBottom: 40, // Add some bottom margin to separate the button from the screen edge
    marginRight: 20, // Add some right margin to separate the button from the screen edge
    alignSelf: "flex-end", // Align the button to the right of the container
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});


