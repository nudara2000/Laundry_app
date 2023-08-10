import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    ActivityIndicator,
    Image
  } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  import React, { useEffect, useState } from "react";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from "../firebase";
  const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [loading,setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
  
    useEffect(() => {
      setLoading(true);
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(!authUser){
          setLoading(false);
        }
        if(authUser){
          navigation.replace("Home");
        }
      });
  
      return unsubscribe;
    },[])
    
    const login = () => {
      signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
        console.log("user credential",userCredential);
        const user = userCredential.user;
        console.log("user details",user)
      })
    }
  
    return (
      <View style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#CCCCFF",
          alignItems: "center",
          padding: 10,
        }}
      >
        {loading ? (
          <View style={{alignItems:"center",justifyContent:"center",flexDirection:"row",flex:1}}>
            <Text style={{marginRight:10}}>Loading</Text>
            <ActivityIndicator size="large" color={"red"}/>
          </View>
        ) : (
          <KeyboardAvoidingView>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
            }}
          >
            <Text>
            <Image
              style={{ width: 200, height: 200, borderRadius: 100 }}
              source={{
                uri: "https://t3.ftcdn.net/jpg/04/27/57/28/240_F_427572855_RhQYKzH4mAzkzIYhnGngBA4h4x5kUwnm.jpg",
              }}
            />
             </Text>
     
            <Text style={{ fontSize: 25, color: "#34495E", fontWeight: "bold",margin:5}}>
              Sign In
            </Text>
  
            <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
              Sign In to your account
            </Text>
          </View>
  
          <View style={{ marginTop: 50 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="black"
              />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor="black"
                style={{
                  fontSize: email ? 18 : 18,
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  marginLeft: 13,
                  width: 300,
                  marginVertical: 10,
                }}
              />
            </View>
  
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="key-outline" size={24} color="black" />
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="black"
                style={{
                  fontSize: password ? 18 : 18,
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  marginLeft: 13,
                  width: 300,
                  marginVertical: 20,
                }}
              />
            </View>
  
            <Pressable
            onPress={login}
              style={{
                width: 200,
                backgroundColor: "#34495E",
                padding: 15,
                borderRadius: 7,
                marginTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
                Login
              </Text>
            </Pressable>
  
            <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 20 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 17,
                  color: "gray",
                  fontWeight: "500",
                }}
              >
                Don't have a account? Sign Up
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
        )}
      </SafeAreaView>
      </View>
    );
  };
  
  export default LoginScreen;
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCFF", // Replace this with your desired background color
  },
  
});