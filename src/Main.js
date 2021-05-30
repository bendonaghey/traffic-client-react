import React from 'react';
import { FaBars } from 'react-icons/fa';
import Map from './Map';
import './styles/App.scss';

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
        <div>
           <Map></Map>
        </div>
    </main>
  );
};

export default Main;