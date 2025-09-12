// api/fetchMenuData.js

import axios from "axios";

export const fetchMenuData = async () => {
  try {
    const response = await axios.get(
      "https://www.foodchow.com/api/FoodChowWD/GetRestaurantMenuWDWidget_multi?ShopId=3161&locale_id=null"
    );

    console.log("FULL API RESPONSE:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching menu:", error);
    return null;
  }
};
