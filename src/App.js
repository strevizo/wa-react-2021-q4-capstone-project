import './App.css';
import React from 'react';
import { Header, Footer } from './components/common';
import { Homepage, Products } from './components'


function App() {
  //Hook to show all products
  const[show, setShow] = React.useState(false);

  //Ternary on line 19 to display either the homepage or products page
  return (
    <div className="App">
      <div className="header-container"> 
        <Header />
      </div>
      <button onClick={()=> setShow(!show)}> View all products </button>
      <div className="content-container">
        {show ? (
          <Products />
        ) : (
          <Homepage />
        )
        }
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
