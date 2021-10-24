import { Productcards } from "..";
import "./Featuredproducts.css"

function Featuredproducts() {
    const productdata = require('../../../mocks/en-us/featured-products.json');

    //Parse the results to an array
    const carddata = Array.from(productdata.results);

    return (Productcards(carddata))

  }

  export default Featuredproducts;