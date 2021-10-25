import React from 'react';
import { Productcards, Filterbar } from './common';
import ReactPaginate from 'react-paginate';
import './Productspage.css'

//I need to refactor this and merge the filterbar component here, it would be better to set the filter 
//in this component as to send the filtered products list as props to the GetProducts function.
const productdata = require('../mocks/en-us/products.json');

function GetProducts(){
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
            <div class="pagination-controls">
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={productdata.total_pages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    pageClassName={'page-link'}
                    previousClassName={'previous-link'}
                    nextClassName={'next-link'}
                />
            </div>
            
        </div>
    )

}

export default Products;