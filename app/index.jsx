// // import { StatusBar } from "expo-status-bar";
// import { Redirect, router } from "expo-router";
// import { View, Text, Image, ScrollView, StatusBar } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { images } from "../constants";
// import { useGlobalContext } from "../context/GlobalProvider";
// import CustomButton from "../components/CustomButton";
// import Loader from "../components/Loader";
// import '../global.css'


// const Welcome = () => {
//   const { loading, isLogged } = useGlobalContext();

//   if (!loading && isLogged){
//     return <Redirect href="/home" />    
//   } 


//   return (
//     <SafeAreaView style={{ backgroundColor: "#161622", height: "100%" }}>
//       <Loader isLoading={loading} />

//       <ScrollView
//         contentContainerStyle={{
//           height: "100%",
//         }}
//       >
//         <View style={{ width: "100%", flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 16 }}>
//           <Image
//             source={images.logop}
//             style={{ width: 250, height: 130}}
//             resizeMode="contain"
//           />

//           <Image
//             source={images.delivery}
//             style={{ maxWidth: 380, width: "100%", height: 298 }}
//             resizeMode="contain"
//           />

//           <View style={{ position: "relative", marginTop: 20 }}>
//             <Text style={{ fontSize: 24, color: "white", fontWeight: "bold", textAlign: "center" }}>
//               Discover Endless{"\n"}
//               Possibilities with{" "}
//               <Text style={{ color: "white" }}>Pick <Text style={{ color: "green" }}>&</Text> Drop</Text>
//             </Text>
//             {/* #7A65F0 */}
//             <Image
//               source={images.path}
//               style={{ width: 200, height: 15, position: "absolute", bottom: -5, right: -38 }}
//               resizeMode="contain"
//             />
//           </View>

//           <Text style={{ fontSize: 14, fontFamily: "Poppins-Regular", color: "#E0E0E0", marginTop: 28, textAlign: "center" }}>
//             Where Creativity Meets Innovation: Embark on a Journey of Limitless
//             Exploration with Pick & Drop
//           </Text>

//           <CustomButton
//             title="Continue with Email"
//             handlePress={() => router.push("/sign-in")}
//             containerStyles={{ width: "100%", marginTop: 28 }}
//           />
//         </View>
//       </ScrollView>

//       <StatusBar backgroundColor="#161622" style="light" />
//     </SafeAreaView>
//   );
// };

// export default Welcome;


import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
// import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { useGlobalContext } from "../context/GlobalProvider";
import CustomButton from "../components/CustomButton";
import Loader from "../components/Loader";
import '../global.css'


const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  const deliveryAnim = useRef(new Animated.Value(-300)).current; 

  useEffect(() => {
    Animated.timing(deliveryAnim, {
      toValue: 0, 
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, [deliveryAnim]);

  if (!loading && isLogged){
    return <Redirect href="/home" />    
  } 


  return (
    <SafeAreaView style={{ backgroundColor: "#161622", height: "100%" }}>
      <Loader isLoading={loading} />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View style={{ width: "100%", flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 16 }}>
          <Image
            source={images.logop}
            style={{ width: 250, height: 130}}
            resizeMode="contain"
          />

          <Animated.Image
            source={images.delivery}
            style={{ maxWidth: 380, width: "100%", height: 298, transform: [{ translateX: deliveryAnim }] }}
            resizeMode="contain"
          />

          <View style={{ position: "relative", marginTop: 20 }}>
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold", textAlign: "center" }}>
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text style={{ color: "white" }}>Pick <Text style={{ color: "green" }}>&</Text> Drop</Text>
            </Text>
            {/* #7A65F0 */}
            <Image
              source={images.path}
              style={{ width: 200, height: 15, position: "absolute", bottom: -5, right: -38 }}
              resizeMode="contain"
            />
          </View>

          <Text style={{ fontSize: 14, fontFamily: "Poppins-Regular", color: "#E0E0E0", marginTop: 28, textAlign: "center" }}>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Pick & Drop
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles={{ width: "100%", marginTop: 28 }}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;