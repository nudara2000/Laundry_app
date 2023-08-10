import { StyleSheet, Text, View,SafeAreaView,Pressable, Image } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native'


const ProfileScreen = () => {
    const user = auth.currentUser;
    const navigation = useNavigation();
    const signOutUser = () => {
        signOut(auth).then(() => {
            navigation.replace("Login");
        }).catch(err => {
            console.log(err);
        })
    };
    const navigateToHome = () => {
      navigation.dispatch(StackActions.popToTop()); // Navigate to HomeScreen
  };
  return (
    <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor: "#CCCCFF"}}>
      <View style={styles.header}>
     <Pressable onPress={navigateToHome}>
                   
                    <Text style={styles.backButtonText}>←</Text>
                </Pressable>
                </View>

     {/* Profile */}
          <Pressable>
            <Image
              style={{ width: 300, height: 300, borderRadius: 100 }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WNC_U07arflTEnIiQJ3bRb5g587a0Z-tlw&usqp=CAU",
              }}
            />
             </Pressable>
     
      <Pressable style={{marginVertical:10}}>
        <Text>welcome {user.email}</Text>
      </Pressable>

      <Pressable onPress={signOutUser}
      style={{
        width: 150,
        backgroundColor: "#34495E",
        padding: 10,
        borderRadius: 7,
        marginTop: 50,
        marginLeft: "auto",
        marginRight: "auto",
      }}>
         <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
                Sign Out
              </Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default ProfileScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCFF", // Replace this with your desired background color
  },
  header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  paddingTop: 10,
  position: 'absolute',
  top: 50,
  left: 0,
                
},
  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
},
backButtonText: {
    fontSize: 24,
},
});