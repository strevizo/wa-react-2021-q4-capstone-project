import React from "react";
import { Sliderswiper, Featuredproducts} from './common';

function Homepage(){
    return(
        <div class="home">
            <div class='product-slider'>
                <h1>Cool Household Stuff</h1>
                <Sliderswiper />
            </div>
            <div class="featured-prodcuts">
                <h1>Featured Products</h1>
                <Featuredproducts />
            </div>
        </div>
    )
}

export default Homepage;