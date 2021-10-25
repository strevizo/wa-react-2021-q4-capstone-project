import React from 'react';
import { Productcards, Filterbar } from './common';

//I need to refactor this and merge the filterbar component here, it would be better to set the filter in this
//as to send the filtered products list as props to the GetProducts function.

function GetProducts(){
    const productdata = require('../mocks/en-us/products.json');
    return(
        Productcards(productdata.results)
    )
}

function Products(){
    return (
        <div className="all-products-page">
            <div className="categories-bar">
                <Filterbar />
            </div>
            <div className="all-products">
                <h1>All Products</h1>
                <GetProducts />
            </div>
            
        </div>
    )

}

export default Products;