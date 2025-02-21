import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";
import { icons, images } from "../../constants";
import EvilIcons from '@expo/vector-icons/EvilIcons';

const HomeScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState("Minnesota, USA");

  const imageStyle = { width: 50, height: 50, resizeMode: 'contain' };

  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false}>
        <View className="flex-1  bg-[#f8f4f4]">
          <ImageBackground
                source={images.bgimg}
                style={{ flex: 1, width: '100%', height:140, resizeMode: 'cover' }}
            >
            <View className="flex-row items-center justify-between px-4 mt-10">
              <Image
                source={images.logo}
                style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "black" }}
                resizeMode="contain"
              />

              <View className="flex-row p-3 mx-2  bg-white rounded-3xl">
                <EvilIcons name="location" size={24} color="blue" />
                <Picker
                  selectedValue={selectedLocation}
                  onValueChange={(itemValue) => setSelectedLocation(itemValue)}
                >
                  <Picker.Item label="Minnesota, USA" value="Minnesota, USA" />
                  <Picker.Item label="Washington, USA" value="Washington, USA" />
                </Picker>
              </View>

              <View className="bg-white rounded-3xl w-7 h-7">
                <AntDesign name="bells" size={18} color="black" style={{ padding: 4.5 }} />
              </View>
            </View>
          </ImageBackground>

          <View className="mt-4 p-4 mx-4 bg-white rounded-2xl">
            <View className="flex-row items-center bg-[#fffcfc] rounded-lg shadow-md">
              <EvilIcons name="search" size={24} color="black" />
              <TextInput
                placeholder="Enter 10 digits tracking number"
                className=" p-2 flex-1 rounded-lg border-none opacity-30 "
              />
              <TouchableOpacity className="p-2">
                <AntDesign name="scan1" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity className="bg-[#389cfc] rounded-xl p-2 mt-4">
              <Text className="text-white text-lg font-bold text-center">Search Now</Text>
            </TouchableOpacity>
          </View>

          <View className="p-4 mx-4 bg-black-200 rounded-xl mt-4 flex-row justify-between items-center">
            <Image
              source={icons.gift}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
            <Text className="text-white font-semibold">Last-Mile Sale Voucher 50% OFF on same-day local</Text>
            <TouchableOpacity className="bg-white p-2 rounded-lg">
              <Text className="text-black font-psemibold">Claim Now</Text>
            </TouchableOpacity>
          </View>

          <View className="p-4">
            <Text className="text-lg font-semibold">Menu</Text>
          </View>

          <View className="px-4 grid grid-cols-2 gap-4 ">

            <TouchableOpacity className="p-4 bg-white rounded-lg items-left">
              <Image
                source={images.createorder}
                style={imageStyle}
              />
              <Text className="mt-2 font-psemibold text-xl">Create Order</Text>
              <Text className="text-slate-600">Ship your parcels with us</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-4 bg-white rounded-lg items-left">
              <Image
                source={images.warehouse}
                style={imageStyle}
              />
              <Text className="mt-2 font-psemibold text-xl">Warehouse</Text>
              <Text className="text-slate-600">See nearby dropoff points</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-4 bg-white rounded-lg items-left">
              <Image
                source={images.shippingrate}
                style={imageStyle}
              />
              <Text className="mt-2 font-psemibold text-xl">Shipping Rates</Text>
              <Text className="text-slate-600">Estimate your shipping cost</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-4 bg-white rounded-lg ">
              <Image
                source={images.reportproblem}
                style={imageStyle}
              />
              <Text className="mt-2 font-psemibold text-xl">Report Problem</Text>
              <Text className="text-slate-600">Submit to get help</Text>
            </TouchableOpacity>
          </View>

          <View className="p-3">
            <Text className="text-lg font-semibold">Recent Shipment</Text>
          </View>

          <View className="p-4 mx-4 bg-white rounded-xl mb-5">
            <View className="flex-row items-center bg-white rounded-lg shadow-md">
              <EvilIcons name="search" size={24} color="black" />
              <TextInput
                placeholder="Search your Recent shipment"
                className="border p-2 flex-1 rounded-lg border-none"
              />
            </View>

            <TouchableOpacity className="p-4 bg-gray-100 rounded-lg mt-4">
              <Text>Document</Text>
              <Text className="text-gray-500">Ongoing</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;


// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, ImageBackground, Dimensions } from "react-native";
// import { AntDesign } from '@expo/vector-icons';
// import { Picker } from "@react-native-picker/picker";
// import { icons, images } from "../../constants";
// import EvilIcons from '@expo/vector-icons/EvilIcons';

// const HomeScreen = () => {
//   const [selectedLocation, setSelectedLocation] = useState("Minnesota, USA");

//   const screenWidth = Dimensions.get('window').width;
//   const imageStyle = { width: screenWidth * 0.4, height: 80, resizeMode: 'contain' };

//   return (
//     <SafeAreaView className="h-full">
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false}>
//         <View className="flex-1 bg-gray-200">
//           <ImageBackground
//             source={images.bgimg}
//             style={{ flex: 1, width: '100%', height: 200, resizeMode: 'cover', opacity: 0.7, shadowColor: "#000", shadowOffset: { width: 0, height: 7}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
//           >
//             <View className="flex-row items-center justify-between px-4 mt-10">
//               <Image
//                 source={images.logo}
//                 style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "black" }}
//                 resizeMode="contain"
//               />

//               <View className="flex-row p-4 mx-2 mt-4 bg-white rounded-3xl">
//                 <EvilIcons name="location" size={24} color="blue" />
//                 <Picker
//                   selectedValue={selectedLocation}
//                   onValueChange={(itemValue) => setSelectedLocation(itemValue)}
//                 >
//                   <Picker.Item label="Minnesota, USA" value="Minnesota, USA" />
//                   <Picker.Item label="Washington, USA" value="Washington, USA" />
//                 </Picker>
//               </View>

//               <View className="bg-white rounded-3xl w-8 h-8">
//                 <AntDesign name="bells" size={24} color="black" style={{ padding: 3 }} />
//               </View>
//             </View>
//           </ImageBackground>

//           <View className="mt-4 p-4 mx-4 bg-white rounded-2xl">
//             <View className="flex-row items-center bg-white rounded-lg shadow-md">
//               <EvilIcons name="search" size={24} color="black" />
//               <TextInput
//                 placeholder="Enter 10 digits tracking number"
//                 className="border p-2 flex-1 rounded-lg border-none"
//               />
//               <TouchableOpacity className="p-2">
//                 <AntDesign name="scan1" size={24} color="black" />
//               </TouchableOpacity>
//             </View>

//             <TouchableOpacity className="bg-blue-500 rounded-lg p-2 mt-4">
//               <Text className="text-white text-lg font-bold text-center">Search Now</Text>
//             </TouchableOpacity>
//           </View>

//           <View className="p-4 mx-4 bg-black-200 rounded-lg mt-4 flex-row justify-between items-center">
//             <Image
//               source={icons.gift}
//               style={{ width: 40, height: 40 }}
//               resizeMode="contain"
//             />
//             <Text className="text-white font-semibold">Last-Mile Sale Voucher 50% OFF on same-day local</Text>
//             <TouchableOpacity className="bg-white p-2 rounded-lg">
//               <Text className="text-black font-psemibold">Claim Now</Text>
//             </TouchableOpacity>
//           </View>

//           <View className="p-4">
//             <Text className="text-lg font-semibold">Menu</Text>
//           </View>

//           <View className="px-4 grid grid-cols-2 gap-4">
//             <TouchableOpacity className="p-4 bg-white rounded-lg items-left">
//               <Image
//                 source={images.createorder}
//                 style={imageStyle}
//               />
//               <Text className="font-psemibold text-xl">Create Order</Text>
//               <Text className="text-slate-600">Ship your parcels with us</Text>
//             </TouchableOpacity>
//             <TouchableOpacity className="p-4 bg-white rounded-lg items-left">
//               <Image
//                 source={images.warehouse}
//                 style={imageStyle}
//               />
//               <Text className="font-psemibold text-xl">Warehouse</Text>
//               <Text className="text-slate-600">See nearby dropoff points</Text>
//             </TouchableOpacity>
//             <TouchableOpacity className="p-4 bg-white rounded-lg items-left">
//               <Image
//                 source={images.shippingrate}
//                 style={imageStyle}
//               />
//               <Text className="font-psemibold text-xl">Shipping Rates</Text>
//               <Text className="text-slate-600">Estimate your shipping cost</Text>
//             </TouchableOpacity>
//             <TouchableOpacity className="p-4 bg-white rounded-lg">
//               <Image
//                 source={images.reportproblem}
//                 style={imageStyle}
//               />
//               <Text className="font-psemibold text-xl">Report Problem</Text>
//               <Text className="text-slate-600">Submit to get help</Text>
//             </TouchableOpacity>
//           </View>

//           <View className="p-3">
//             <Text className="text-lg font-semibold">Recent Shipment</Text>
//           </View>

//           <View className="p-4 mx-4 bg-white rounded-xl mb-5">
//             <View className="flex-row items-center bg-white rounded-lg shadow-md">
//               <EvilIcons name="search" size={24} color="black" />
//               <TextInput
//                 placeholder="Search your Recent shipment"
//                 className="border p-2 flex-1 rounded-lg border-none"
//               />
//             </View>

//             <TouchableOpacity className="p-4 bg-gray-100 rounded-lg mt-4">
//               <Text>Document</Text>
//               <Text className="text-gray-500">Ongoing</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;