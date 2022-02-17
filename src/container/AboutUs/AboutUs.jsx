import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <p className="p__opensans">Rrethi TV is a Video Production Company specialised on the realisation
                                    of video commercials. Created on 2015 from Armend Tigani and Visar Selimi
                                    2 Videographers, with lots of experience and love for the profession.
                                    The origin Rrethi Tv is very simple, just like the name. But very attractive
                                    and real meaning. Rrethi TV does not symbolize anything else but the circle
                                    that surround's us, our team, our clients, literaly everyone that enters our circle</p>
                                    
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <p className="p__opensans">In the beginning trends of social media marketing. Rrethi TV was present since
                                    2015, the experience created during this time inevitably growing in number
                                    and growing in experience and interpersonal skills of our team,  we can say that
                                    we are your closest partner to setting up your brand, company or venture.
                                    With professional photography, with professional videography and design, all these
                                    services posted consistenly on social media</p>

                                    
                                    
      </div>
    </div>
  </div>
);

export default AboutUs;