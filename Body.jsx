import React from 'react';
import Search from './Utils/Search';
import RestaurantList from './components/RestaurentList';
import Footer from './Footer';
function Body() {
    return (
        <div>
            <div id='Body-Search'>
                <Search />
            </div>
            <RestaurantList />
            <Footer />
        </div>
    );
}
export default Body;