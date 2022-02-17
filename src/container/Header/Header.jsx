import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Who are we?" />
      <h1 className="app__header-h1">RRETHI TV</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        We are an experienced, passionate team that works in multiple digital artistic fields such as photography and video editing.
        We make it easy for people to tell stories that impact their audience. We are storytellers working across all industries
        delivering a wide range of production styles for a variety of interesting clients</p>
        <div className="app__header-links_icons">
          <FiFacebook />
          <FiInstagram />
        </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;