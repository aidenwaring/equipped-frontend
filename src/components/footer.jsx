import React from "react";
import {Container} from "react-bootstrap"
import { TiSocialFacebook,TiSocialTwitter, TiSocialYoutube, TiSocialInstagram} from 'react-icons/ti';

export default function footer() {
  return (
    <div>
      <Container fluid className='footer'>
        <h3>Equipped</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cumque
          facilis at deserunt nostrum perspiciatis.
        </p>
        <div className="social-footer">
            <TiSocialFacebook /> 
            <TiSocialTwitter />
            <TiSocialYoutube />
            <TiSocialInstagram />
        </div>
      </Container>
    </div>
  );
}
