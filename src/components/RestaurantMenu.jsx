import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CDN_URL } from "../config/constants";
import { RestaurantMenuShimmer } from "./RestaurantMenuShimmer";
import useRestaurantMenu from "../Utils/useRestaurants";

/**
 * RestaurantMenu Component
 * Uses custom hook (useRestaurantMenu) to display menu data
 */
const RestaurantMenu = () => {
  // Get restaurant ID from URL params
  const { resid } = useParams();

  // Use custom hook
  const { restaurantInfo, itemCards, loading, error, refetch } =
    useRestaurantMenu(resid);

  // Format price helper
  const formatPrice = (priceInPaise) =>
    priceInPaise ? Math.floor(priceInPaise / 100) : 0;

  // Truncate description helper
  const truncateDescription = (text, maxLength = 80) => {
    if (!text) return "";
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  // Loading state
  if (loading) return <RestaurantMenuShimmer />;

  // Error state
  if (error) {
    return (
      <div className="menu-container">
        <div className="error-message">
          <h2>Unable to load restaurant menu</h2>
          <p>Error: {error}</p>
          <button
            onClick={() => refetch(resid)}
            style={{
              backgroundColor: "#e53e3e",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // No data found
  if (!restaurantInfo) {
    return (
      <div className="menu-container">
        <div className="error-message">
          <h2>Restaurant not found</h2>
          <p>The restaurant you’re looking for doesn’t exist or was removed.</p>
        </div>
      </div>
    );
  }

  // Destructure restaurant info
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
      {/* Restaurant Info */}
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
            <p>
              ⭐ {avgRatingString} ({totalRatingsString})
            </p>
          )}
          <p>{costForTwoMessage}</p>
          <p>{sla?.slaString}</p>
        </div>
      </div>

      {/* Menu List */}
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
                    onClick={() => alert(`Added ${itemName} to cart!`)}
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
