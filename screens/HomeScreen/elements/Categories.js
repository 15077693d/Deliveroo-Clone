import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "../../../components/Cards/CategoryCard";
import { categoryDetails } from "../../../constants";

const Categories = () => {
  return (
    <ScrollView
      className="p-2 bg-slate-50"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categoryDetails.map((detail, i) => (
        <CategoryCard {...detail} key={`CategoryCard_${i}`} />
      ))}
    </ScrollView>
  );
};

export default Categories;
