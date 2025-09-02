import { useState, useEffect } from "react";
import { SWIGGY_RESTAURENT_URL } from "../config/constants";

/**
 * Custom hook to fetch restaurant menu data from Swiggy API
 * @param {string} resid - Restaurant ID from URL
 * @returns {Object} - { restaurantInfo, itemCards, loading, error, refetch }
 */
const useRestaurantMenu = (resid) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [itemCards, setItemCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch menu data
  const fetchMenuData = async (restaurantId) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${SWIGGY_RESTAURENT_URL}${restaurantId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      // Extract restaurant info
      const info = json?.data?.cards?.[2]?.card?.card?.info;
      if (!info) throw new Error("Restaurant information not found");
      setRestaurantInfo(info);

      // Extract menu items
      const cards =
        json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      const items =
        cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards ||
        [];
      setItemCards(items);
    } catch (err) {
      console.error("Error fetching menu data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on mount or resid change
  useEffect(() => {
    if (resid) {
      fetchMenuData(resid);
    }
  }, [resid]);

  return { restaurantInfo, itemCards, loading, error, refetch: fetchMenuData };
};

export default useRestaurantMenu;
