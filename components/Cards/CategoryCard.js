import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ imageUri, title }) => {
  return (
    <TouchableOpacity>
      <Image
        className=" w-24 h-24 rounded-md mr-1 bg-gray-200"
        source={{ uri: imageUri }}
      />
      <Text className="absolute bottom-2 left-3 font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
