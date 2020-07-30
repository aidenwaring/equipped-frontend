import React from "react";
import {Container} from "react-bootstrap"
import { TiSocialFacebook,TiSocialTwitter, TiSocialYoutube, TiSocialInstagram} from 'react-icons/ti';

export default function footer() {
  return (
    <div>
      <Container fluid className='footer'>
        <h3>Equipped</h3>
        <p>
          Putting technology in your hands.
          <p>Copyright &copy; Alex & Aiden 2020</p>
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
