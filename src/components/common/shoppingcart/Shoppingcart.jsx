import React from "react";
import './Shoppingcart.css'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

function Shoppingcart(){
    return(
        <section>
            <button type="button" class="shopping-cart-button float-right">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="text">Shopping Cart</span>
            </button>
        </section>
    )
}

export default Shoppingcart;