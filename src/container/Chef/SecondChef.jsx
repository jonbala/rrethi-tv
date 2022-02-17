import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './SecondChef.css';

const SecondChef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="CEO" />
      <h1 className="headtext__cormorant">Videograph</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign">
        <p>Visar Selimi</p>
        <p className="p__opensans">CEO & Founder</p>
      </div>
    </div>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.secondchef} alt="chef_image" />
    </div>
  </div>
);

export default SecondChef;