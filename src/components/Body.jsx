import React, {useState} from 'react';
import RestaurantCard from './RestaurantCard';
import restaurantList from '../config/mockData';

function Body() {

    const [searchList, setSearchList] = useState("");

    const handleSearch=(e) =>{
        setSearchList(e.target.value)
    }
    const filteredList = restaurantList.filter((restaurant) => (
              restaurant.info.name.toLowerCase().includes(searchList.toLowerCase()) || 
              restaurant.info.areaName.toLowerCase().includes(searchList.toLowerCase()) ||
              restaurant.info.cuisines.join(", ").toLowerCase().includes(searchList.toLowerCase())
            ));
    return (
        <div>
            <>
        <div id='Body-Search'>
         <div id="search-bar">
            <input type="text" placeholder="Search anything you want..." aria-label="Search" onChange={handleSearch} value={searchList}/>
            <img className="search-icon" src="https://img.icons8.com/pastel-glyph/128/search--v2.png" alt="search icon" />
         </div>
        </div>
        <div className="restaurant-container">
            {filteredList.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
            ))}
        </div>
        </>
        </div>
    );
}
export default Body;