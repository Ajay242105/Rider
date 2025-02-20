
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";
import { icons, images } from "../../constants";

const HomeScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState("Minnesota, USA");

  return (
    <SafeAreaView className="h-full">

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 bg-white">
          <View className="h-40 relative bg-blue-300">
            <View className="flex-row items-center justify-between px-4 mt-10">
              <Image source={images.logo}
                style={{ width: 50, height: 50, borderRadius: "100%", backgroundColor: "black" }}
                resizeMode="contain"

              />

              <View className="p-4 mx-2 mt-4 bg-white rounded-3xl">

                <Picker
                  selectedValue={selectedLocation}
                  onValueChange={(itemValue) => setSelectedLocation(itemValue)}
                >
                  <Picker.Item label="Minnesota, USA" value="Minnesota, USA" />
                  <Picker.Item label="Washington, USA" value="Washington, USA" />
                </Picker>
                {/* </View> */}
              </View>
              <View className="bg-white rounded-3xl w-8 h-8">
                <AntDesign name="bells" size={24} color="black" style={{ padding: 3 }} />

              </View>
            </View>
          </View>

          <View className="p-4 mx-4 mt-5 bg-gray-200 rounded">
            <View className="flex-row items-center bg-white rounded-lg shadow-md">
              <TextInput
                placeholder="Enter 10 digits tracking number"
                className="border p-2 flex-1 rounded-lg border-none"
              />
              <TouchableOpacity className="p-2">
                <AntDesign name="scan1" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity className="bg-blue-500 rounded-lg p-2 mt-4">
              <Text className="text-white text-lg font-bold text-center">Search Now</Text>
            </TouchableOpacity>
          </View>

          <View className="p-4 mx-4 bg-black-200 rounded-lg mt-4 flex-row justify-between items-center">
            <Image source={icons.gift}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"

            />
            <Text className="text-white font-semibold">Last-Mile Sale Voucher 50% OFF on same-day local</Text>
            <TouchableOpacity className="bg-white p-2 rounded-lg">
              <Text className="text-black font-psemibold">Claim Now</Text>
            </TouchableOpacity>
          </View>

          <View className="p-4 grid grid-cols-2 gap-4">
            <TouchableOpacity className="p-4 bg-gray-200 rounded-lg items-center">
              <Image
                source={images.createorder}
                style={{ maxWidth: "40%", width: "100%", height: 298 }}
                resizeMode="contain"
              />
              <Text>Create Order</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-4 bg-gray-200 rounded-lg items-center">
              <Image
                source={images.warehouse}
                style={{ maxWidth: "40%", width: "100%", height: 298 }}
                resizeMode="contain"
              />
              <Text>Warehouse</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-4 bg-gray-200 rounded-lg items-center">
              <Image
                source={images.shippingrate}
                style={{ maxWidth: "40%", width: "100%", height: 298 }}
                resizeMode="contain"
              />
              <Text>Shipping Rates</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-4 bg-gray-200 rounded-lg items-center">
              <Image
                source={images.reportproblem}
                style={{ maxWidth: "40%", width: "100%", height: 298 }}
                resizeMode="contain"
              />
              <Text>Report Problem</Text>
            </TouchableOpacity>


          </View>

          <View className="p-4">
            <Text className="text-lg font-semibold">Recent Shipment</Text>
            <TouchableOpacity className="p-4 bg-gray-100 rounded-lg mt-2">
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