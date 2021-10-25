import React, { useState } from 'react';
import './Filterbar.css'
import SidebarData from '../../../mocks/en-us/product-categories.json';

function Filterbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const categorydata = SidebarData.results;

  return (
    <>
        <div className='navbar'>
           <li className='menu-bars' onClick={showSidebar}> Show categories </li>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            {categorydata.map(category => {
              return (
                <li key={category.id} className={category.type}>
                    {category.data.name}
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  );
}

export default Filterbar;