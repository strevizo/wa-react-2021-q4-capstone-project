import React from "react";

/* I still need to un-hardcode these cards*/
function Productgrid() {
    const carddata = require('../../../mocks/en-us/featured-products.json');
    console.log(carddata.results[1].data.mainimage.url)
    return (
      <div className="wrapper">
        <Card
          img={carddata.results[1].data.mainimage.url}
          title={carddata.results[1].data.name}
          description={carddata.results[1].short_description}
          price={carddata.results[1].price}
        />
  
        <Card
          img={carddata.results[2].data.mainimage.url}
          title={carddata.results[2].data.name}
          description={carddata.results[2].short_description}
          price={carddata.results[2].price}
        />
        <Card
          img={carddata.results[3].data.mainimage.url}
          title={carddata.results[3].data.name}
          description={carddata.results[3].short_description}
          price={carddata.results[3].price}
        />
        <Card
          img={carddata.results[4].data.mainimage.url}
          title={carddata.results[4].data.name}
          description={carddata.results[4].short_description}
          price={carddata.results[4].price}
        />
      </div>
    );
  }
  
  function Card(props) {
    return (
      <div className="card">
        <img alt="Product" src={props.img} className="card__img" />
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
          <h3 className="card__price">{props.price}</h3>
          <button className="card__btn">Add to Cart</button>
        </div>
      </div>
    );
  }

  export default Productgrid;