import React from "react";
import { IMAGE_CDN_URL } from "../config/constants";
const RestaurantCard = (props) => {
    const { restaurantData } = props;
    const { cloudinaryImageId, name, areaName, avgRating, cuisines, costForTwo, deliveryTime } = restaurantData?.info;
    return (
        <div className="restaurant-card">
            <img src={IMAGE_CDN_URL + cloudinaryImageId} alt={name} className="restaurant-logo" />
            <div className="restaurant-details">
                <h3 className="restaurant-name">{name.length > 22 ? `${name.slice(0, 22)}...` : name}</h3>
                <div className="esa-rating">
                    <h4 className="rating">{avgRating}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{deliveryTime} mins</h4>
                </div>
                <p className="cousine">{cuisines.join(", ").length > 30 ? `${cuisines.join(", ").slice(0, 30)}...` : cuisines.join(", ")}</p>
                <p className="location">{areaName}</p>
            </div>
        </div>
    );
};
export default RestaurantCard;
