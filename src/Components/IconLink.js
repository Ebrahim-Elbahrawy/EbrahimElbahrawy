import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutubeSquare,
  faFacebook,
  // faGitHub,
  // faGoogleLogo,
} from "@fortawesome/free-brands-svg-icons";

function IconLink() {
  return (
    <div className="d-flex position-fixed flex-column brand-link justify-content-center align-items-center">
      <a
        href="https://www.youtube.com/channel/UCboauVlgiA6zLADSctlEKzA"
        target="_blank"
        rel="noreferrer"
        className="icon-brand "
      >
        <FontAwesomeIcon icon={faYoutubeSquare} />
      </a>
      <a
        href="https://www.facebook.com/ebrahim.elbahrawy.96"
        target="_blank"
        rel="noreferrer"
        className="icon-brand "
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  );
}

export default IconLink;
