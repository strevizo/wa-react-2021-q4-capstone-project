import React from "react";
import "./Productgrid.css"

/* I still need to un-hardcode these cards*/
function Productgrid() {
    const productdata = require('../../../mocks/en-us/featured-products.json');

    //Parse the results to an array
    const carddata = Array.from(productdata.results);

    return (
      <section class="products">
          {
            carddata.map(product => (
              <Card
                key={product.id}
                img={product.data.mainimage.url}
                title={product.data.name}
                description={product.short_description}
                price={product.price}
              />
            ))
          }
      </section>
    );
  }
  
  function Card(props) {
    return (
      <div class="product-card" key={props.id}>
        <img alt="Product" src={props.img} class="card-img" />
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-description">{props.description}</p>
          <h3 className="card-price">{props.price}</h3>
          <button className="card-btn">Add to Cart</button>
        </div>
      </div>
    );
  }

  export default Productgrid;