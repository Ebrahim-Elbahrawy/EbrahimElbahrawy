// import React, { useState } from "react";
// import { Container, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "../index.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon, faLightbulbOn } from "@fortawesome/free-solid-svg-icons";

// function Header() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleToggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.style.setProperty(
//       "--main-color",
//       isDarkMode ? "#FFFFFF" : "#000000"
//     );
//     document.documentElement.style.setProperty(
//       "--sec-color",
//       isDarkMode ? "#000000" : "#FFFFFF"
//     );
//   };

//   return (
//     <div className="header">
//       <Container>
//         <Nav fill variant="tabs" defaultActiveKey="/">
//           <Nav.Item>
//             <Nav.Link as={Link} to="/" className="Tab-one">
//               Home
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link as={Link} to="/profile" className="Tab-one">
//               Project
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link
//               as={Link}
//               to="/experience"
//               className="Tab-one text-decoration-none"
//             >
//               Skills
//             </Nav.Link>
//           </Nav.Item>

//           <Nav.Item>
//             <Nav.Link as={Link} to="/contact" className="Tab-one">
//               Contact
//             </Nav.Link>
//           </Nav.Item>
//           <div className="theme-container">
//             <div className="theme-toggler">
//               <span>Light</span>
//               {isDarkMode ? (
//                 <FontAwesomeIcon
//                   icon={faMoon}
//                   className="theme_change"
//                   onClick={handleToggleDarkMode}
//                 />
//               ) : (
//                 <FontAwesomeIcon
//                   icon={faLightbulbOn}
//                   className="theme_change"
//                   onClick={handleToggleDarkMode}
//                 />
//               )}

//               <span>Dark</span>
//             </div>
//           </div>
//         </Nav>
//       </Container>
//     </div>
//   );
// }

// export default Header;
import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.style.setProperty(
      "--main-color",
      isDarkMode ? "#FFFFFF" : "#000000"
    );
    document.documentElement.style.setProperty(
      "--sec-color",
      isDarkMode ? "#000000" : "#FFFFFF"
    );
  };

  return (
    <div className="header">
      <Container>
        <Nav fill variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link as={Link} to="/" className="Tab-one">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/project" className="Tab-one">
              Project
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/experience"
              className="Tab-one text-decoration-none"
            >
              Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact" className="Tab-one">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="theme-container">
          <div className="theme-toggler">
            <span>Light</span>
            {isDarkMode ? (
              <FontAwesomeIcon
                icon={faMoon}
                className="theme_change"
                onClick={handleToggleDarkMode}
              />
            ) : (
              <FontAwesomeIcon
                icon={faLightbulb}
                className="theme_change2"
                onClick={handleToggleDarkMode}
              />
            )}
            <span>Dark</span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
