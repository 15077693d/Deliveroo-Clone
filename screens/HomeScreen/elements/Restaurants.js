import { ScrollView } from "react-native";
import React from "react";
import RestaurantCard from "../../../components/Cards/RestaurantCard";
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
          <RestaurantCard {...detail} key={`restaurantCard_${category}_${i}`} />
        ))}
    </ScrollView>
  );
};

export default Restaurants;
