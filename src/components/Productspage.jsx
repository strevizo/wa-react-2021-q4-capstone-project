import React from 'react';
import { Productcards } from './common';

function GetProducts(){
    const productdata = require('../mocks/en-us/products.json');
    return(
        Productcards(productdata.results)
    )
}

function Products(){
    return (
        <div className="all-products">
            <h1>All Products</h1>
            <GetProducts />
        </div>
    )

}

export default Products;