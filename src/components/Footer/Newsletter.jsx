import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Subscribe" />
      <h1 className="headtext__cormorant">Subscribe our work</h1>
      <p className="p__opensans">Get informed for the latest projects that our team is working on!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Send</button>
    </div>
  </div>
);

export default Newsletter;