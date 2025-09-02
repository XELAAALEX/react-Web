/**
 * API Configuration Constants
 * Central location for all API endpoints and configuration values
 */

// Swiggy CDN URL for restaurant and food item images
export const IMAGE_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Swiggy API endpoint for restaurant listings
// Uses Vellore coordinates (lat=13.0362561, lng=80.16125199999999)
export const SWIGGY_API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0362561&lng=80.16125199999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// Swiggy API endpoint for individual restaurant menus
// Restaurant ID should be appended to this URL
export const SWIGGY_RESTAURENT_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0362561&lng=80.16125199999999&restaurantId=";

export const GITHUB_API = "https://api.github.com/users/XELAAALEX";