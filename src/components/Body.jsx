import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { SWIGGY_API_URL } from '../config/constants';
import useOnlineOffline from '../Utils/useOnlineOffline';
import UserOffline from './UserOffline';

/**
 * Body Component - Main content area with search and restaurant listings
 * Handles restaurant data fetching, search functionality, and loading states
 */
function Body() {
  // State management for restaurant data and search functionality
  const [searchText, setSearchText] = useState("");           // Current search input value
  const [allRestaurants, setAllRestaurants] = useState([]);   // Complete restaurant list from API
  const [filteredList, setFilteredList] = useState([]);       // Filtered restaurants to display
  const [loading, setLoading] = useState(true);               // Loading state for shimmer effect

  /**
   * Handle search input changes and filter restaurants
   * Filters by restaurant name, area name, and cuisines
   * @param {Event} e - Input change event
   */
  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);

    // Filter restaurants based on search text
    const filtered = allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(text.toLowerCase()) ||
      restaurant.info.areaName.toLowerCase().includes(text.toLowerCase()) ||
      restaurant.info.cuisines.join(", ").toLowerCase().includes(text.toLowerCase())
    );

    setFilteredList(filtered);
  };

  /**
   * Fetch restaurant data from Swiggy API
   * Handles API response parsing and duplicate removal
   */
  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      const response = await fetch(SWIGGY_API_URL);
      const data = await response.json();

      // Extract restaurant data from API response structure
      const cards = data?.data?.cards || [];
      const restaurants = cards.flatMap(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );

      // Remove duplicate restaurants based on ID
      const uniqueRestaurants = Array.from(
        new Map(restaurants.map((r) => [r.info.id, r])).values()
      );

      setAllRestaurants(uniqueRestaurants);
      setFilteredList(uniqueRestaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      // Could add error state handling here
    } finally {
      setLoading(false);
    }
  };

  /**
   * Effect hook to fetch restaurants on component mount
   */
  useEffect(() => {
    fetchRestaurants();
  }, []);
    let isOnline = useOnlineOffline();


    if (!isOnline) {
    return <UserOffline onRetry={() => window.location.reload()} />;
  }
  return (
    <div>
      {/* Search Bar Section */}
      <div id="Body-Search">
        <div id="search-bar">
          <input
            type="text"
            placeholder="Search restaurants, cuisines, or areas..."
            aria-label="Search restaurants"
            onChange={handleSearch}
            value={searchText}
          />
          <img
            className="search-icon"
            src="https://img.icons8.com/pastel-glyph/128/search--v2.png"
            alt="Search icon"
          />
        </div>
      </div>

      {/* Restaurant Listings or Loading State */}
      <div className="restaurant-container">
        {loading ? (
          // Show shimmer loading animation while fetching data
          <Shimmer />
        ) : filteredList.length > 0 ? (
          // Display filtered restaurant cards
          filteredList.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              restaurantData={restaurant}
            />
          ))
        ) : (
          // Show message when no restaurants match search
          <div className="error-message">
            No restaurants found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}

export default Body;