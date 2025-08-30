import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CDN_URL, SWIGGY_RESTAURENT_URL } from "../config/constants";
import { RestaurantMenuShimmer } from "./RestaurantMenuShimmer";

/**
 * RestaurantMenu Component
 * Displays detailed restaurant information and menu items
 * Fetches data based on restaurant ID from URL parameters
 */
const RestaurantMenu = () => {
  // Get restaurant ID from URL parameters
  const { resid } = useParams();
  
  // State management for restaurant data and loading
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [itemCards, setItemCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Fetch restaurant menu data from Swiggy API
   * Handles API response parsing and error management
   * @param {string} restaurantId - ID of the restaurant to fetch
   */
  const fetchMenuData = async (restaurantId) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${SWIGGY_RESTAURENT_URL}${restaurantId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const json = await response.json();

      // Extract restaurant info from API response
      const info = json?.data?.cards?.[2]?.card?.card?.info;
      if (!info) {
        throw new Error("Restaurant information not found");
      }
      setRestaurantInfo(info);

      // Extract menu items from API response
      const cards = json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      const items = cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];
      setItemCards(items);
      
    } catch (error) {
      console.error("Error fetching menu data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Effect hook to fetch menu data when component mounts or resid changes
   */
  useEffect(() => {
    if (resid) {
      fetchMenuData(resid);
    }
  }, [resid]);

  /**
   * Format price from paise to rupees
   * @param {number} priceInPaise - Price in paise
   * @returns {number} - Price in rupees
   */
  const formatPrice = (priceInPaise) => {
    return priceInPaise ? Math.floor(priceInPaise / 100) : 0;
  };

  /**
   * Truncate description text for better display
   * @param {string} text - Text to truncate
   * @param {number} maxLength - Maximum length
   * @returns {string} - Truncated text
   */
  const truncateDescription = (text, maxLength = 80) => {
    if (!text) return "";
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  // Show shimmer loading while fetching data
  if (loading) {
    return <RestaurantMenuShimmer />;
  }

  // Show error message if data fetch failed
  if (error) {
    return (
      <div className="menu-container">
        <div className="error-message">
          <h2>Unable to load restaurant menu</h2>
          <p>Error: {error}</p>
          <button 
            onClick={() => fetchMenuData(resid)}
            style={{
              backgroundColor: "#e53e3e",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Show message if no restaurant info found
  if (!restaurantInfo) {
    return (
      <div className="menu-container">
        <div className="error-message">
          <h2>Restaurant not found</h2>
          <p>The restaurant you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  // Destructure restaurant information
  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
    sla,
    costForTwoMessage,
  } = restaurantInfo;

  return (
    <div className="menu-container">
      {/* Restaurant Header Information */}
      <div className="menu-header">
        <img
          src={IMAGE_CDN_URL + cloudinaryImageId}
          alt={name}
          className="menu-image"
        />
        <div className="menu-info">
          <h1>{name}</h1>
          <h3>{locality}</h3>
          <p>{cuisines?.join(", ")}</p>
          {avgRatingString && (
            <p>⭐ {avgRatingString} ({totalRatingsString})</p>
          )}
          <p>{costForTwoMessage}</p>
          <p>{sla?.slaString}</p>
        </div>
      </div>

      {/* Menu Items List */}
      <div>
        <h2 style={{ marginBottom: "20px", color: "#2d3748" }}>Menu</h2>
        {itemCards.length > 0 ? (
          itemCards.map((item) => {
            const {
              id,
              name: itemName,
              price,
              defaultPrice,
              imageId,
              description,
              ratings,
            } = item.card.info;

            return (
              <div key={id} className="menu-item">
                <div className="menu-item-info">
                  <h3>{itemName}</h3>
                  <h4>₹{formatPrice(price || defaultPrice)}</h4>
                  <p>{truncateDescription(description)}</p>
                  {ratings?.aggregatedRating?.rating && (
                    <p>
                      ⭐ {ratings.aggregatedRating.rating} (
                      {ratings.aggregatedRating.ratingCountV2})
                    </p>
                  )}
                </div>
                <div style={{ textAlign: "center" }}>
                  {imageId && (
                    <img
                      src={IMAGE_CDN_URL + imageId}
                      alt={itemName}
                      className="menu-item-image"
                      loading="lazy"
                    />
                  )}
                  <button
                    className="add-button"
                    onClick={() => {
                      // Here you would typically add item to cart
                      alert(`Added ${itemName} to cart!`);
                    }}
                  >
                    ADD
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="error-message">
            <h3>No menu items available</h3>
            <p>This restaurant currently has no menu items to display.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;