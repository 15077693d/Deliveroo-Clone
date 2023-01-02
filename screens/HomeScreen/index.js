import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, Text, View, Image, TextInput } from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import Categories from "./elements/Categories";

import { deliverooGreen } from "../../constants";
import AppBar from "../../components/AppBar";

export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      {/* Header */}
      <View className="flex-row items-center justify-between p-2">
        <View className="flex-row items-center">
          <Image
            className="w-8 h-8 rounded-full mr-1 bg-gray-200"
            source={{ uri: "https://links.papareact.com/wru" }}
          />
          <View>
            <Text className="text-xs font-bold text-gray-400 ">
              Deliver now!
            </Text>
            <View className="flex-row items-center">
              <Text className="text-lg font-bold text-black">
                Current Location
              </Text>
              <ChevronDownIcon color={deliverooGreen} size={20} />
            </View>
          </View>
        </View>
        <UserIcon size={30} color={deliverooGreen} />
      </View>
      {/* Search */}
      <View className="p-2 flex-row items-center space-x-2">
        <View className="bg-gray-100 flex-row p-2 space-x-2 flex-1">
          <MagnifyingGlassIcon color={"gray"} size={20} />
          <TextInput placeholder="Restaurants and cuisines" />
        </View>
        <AdjustmentsVerticalIcon color={deliverooGreen} />
      </View>
      {/** Body */}
      <Categories />
      <AppBar
        title="Offers near you!"
        subtitle="Why not suport your local restaurant tonight!"
      />
      <AppBar title="Featured" subtitle="Paid placements from our partners" />
    </SafeAreaView>
  );
}
