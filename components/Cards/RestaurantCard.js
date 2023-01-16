import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ imageUri, title, type, score, location }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restaurant")}
      className="h-64 w-64 bg-white mr-3 shadow-sm rounded-md"
    >
      <Image
        className="h-[60%] w-[100%] rounded-t-sm"
        source={{ uri: imageUri }}
      />
      <View className="p-2 space-y-1 ">
        <Text className="font-extrabold text-black text-base">{title}</Text>
        <View className="flex flex-row items-center">
          <StarIcon color={"#A9AEB8"} size={20} />
          <Text className="ml-1 font-bold text-gray-400">
            {`${score} ‧ ${type}`}
          </Text>
        </View>
        <View className="flex flex-row items-center">
          <MapPinIcon color={"#A9AEB8"} size={20} />
          <Text className="ml-1 font-bold text-gray-400">
            {`Nearby ‧ ${location}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
