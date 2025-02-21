import { router } from "expo-router";
import { View, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import { images } from "../constants";


const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="flex justify-center items-center px-4 h-27">
      <Image
        source={images.empty}
        resizeMode="contain"
        style={{ maxWidth: "30%", width: "100%", height: 70,marginTop:20 }}
      />

      <Text className="text-sm font-pmedium text-gray-100">{title}</Text>
      <Text className="text-xl text-center font-psemibold text-white mt-2">
        {subtitle}
      </Text>

      {/* <CustomButton
        title="Back to Home"
        handlePress={() => router.push("/home")}
        containerStyles="w-full my-5"
      /> */}
    </View>
  );
};

export default EmptyState;