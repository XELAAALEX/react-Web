import React from "react";

/**
 * Shimmer Component
 * Displays animated loading placeholders while restaurant data is being fetched
 * Shows 10 shimmer cards that mimic the structure of restaurant cards
 */
const Shimmer = () => {
  // Create array of 10 placeholder items for shimmer effect
  const shimmerCards = Array(10).fill(null);

  return (
    <div className="restaurant-container">
      {shimmerCards.map((_, index) => (
        <div key={index} className="restaurant-card shimmer-card">
          {/* Shimmer image placeholder */}
          <div className="shimmer-image shimmer-animated"></div>
          
          {/* Shimmer text placeholders */}
          <div className="shimmer-details">
            <div className="shimmer-line shimmer-animated short"></div>
            <div className="shimmer-line shimmer-animated medium"></div>
            <div className="shimmer-line shimmer-animated long"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;