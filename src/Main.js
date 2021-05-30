import React from 'react';
import { FaBars } from 'react-icons/fa';
import Map from './Map';

const Main = ({
  collapsed,
  handleToggleSidebar,
  handleCollapsedChange
}) => {
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
        <h1>
           <Map></Map>
        </h1>
    </main>
  );
};

export default Main;