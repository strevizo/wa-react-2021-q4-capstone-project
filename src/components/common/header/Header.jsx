import React from 'react';
import Searchbar  from '../searchbar';
import Shoppingcart from '../shoppingcart';

import './Header.css';

function Header(){

    return(
        <section className="header">
            <section className="header-top-logo">
                <a href="/" className="header-logo">Muebletopia</a>
            </section>
            <section className="header-top-searchbar">
                <section className="header-searchbar">
                    <Searchbar />
                </section>
            </section>
            <section className="header-top-shoppingcarg">
                <section className="header-shoppingcarg">
                    <Shoppingcart />
                </section>
            </section>
        </section>
    )
}

export default Header;