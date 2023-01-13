import { View, Text } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import { deliverooGreen } from "../constants";

const TitleBar = ({ title, subtitle }) => {
  return (
    <View className="p-2 bg-slate-50">
      <View className="flex-row justify-between">
        <Text className="font-extrabold text-base text-black">{title}</Text>
        <ArrowRightIcon size={20} color={deliverooGreen} />
      </View>
      <Text className="font-extrabold text-xs text-gray-400">{subtitle}</Text>
    </View>
  );
};

export default TitleBar;
