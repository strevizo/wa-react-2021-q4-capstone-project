import React from 'react';
import Searchbar  from '../searchbar';
import Shoppingcart from '../shoppingcart';

import './Header.css';

function Header(){

    return(
        <nav class="header">
            <section class="header-top-logo">
                <a href="/" class="header-logo">Muebletopia</a>
            </section>
            <section class="header-top-searchbar">
                    <Searchbar />
            </section>
            <section class="header-top-shoppingcart">
                    <Shoppingcart />
            </section>
        </nav>
    )
}

export default Header;