import { ScrollView } from "react-native";
import React from "react";
import FoodCard from "../../../components/Cards/FoodCard";
import { restaurantDetails } from "../../../constants";

const Restaurants = ({ category }) => {
  return (
    <ScrollView
      className="p-2 bg-slate-50"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {restaurantDetails
        .filter((restaurantDetail) => restaurantDetail.category === category)
        .map((detail, i) => (
          <FoodCard {...detail} key={`restaurantCard_${category}_${i}`} />
        ))}
    </ScrollView>
  );
};

export default Restaurants;
