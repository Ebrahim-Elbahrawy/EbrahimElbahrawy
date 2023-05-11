import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Home from "./Components/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IconLink from "./Components/IconLink";
import ContactForm from "./Components/ContactForm";
import Experience from "./Components/Experience";
import Project from "./Components/Project";

// import Canvas from "./Components/Canvas";

import { useState, useEffect } from "react";
// import CircularCursor from "./Components/CircularCursor";
import ProjectDetails from "./Components/ProjectDetails";

function App() {
  const [info, setInfo] = useState({});
  const [itemData, setItemData] = useState([]);
  const [projectInfo, setProjectInfo] = useState([]);
  const [photoshopImage, setPhotoshopImage] = useState([]);
  const [loading, setLoading] = useState(true);

  // filter by category
  const filterByCategory = (cat) => {
    if (cat === "ALL") {
      fetch("https://api.npoint.io/8895f3d15942a822fc59")
        .then((response) => response.json())
        .then((data) => setItemData(data));
    } else {
      const newArr = itemData.filter((item) => item.category === cat);
      setItemData(newArr);
    }
  };

  // filter button
  const newCat = [...new Set(itemData.map((i) => i.category))];

  useEffect(() => {
    fetch("https://api.npoint.io/8895f3d15942a822fc59")
      .then((response) => response.json())
      .then((data) => setItemData(data));
    fetch("https://api.npoint.io/ffa4df4bd05b7beaf0ad")
      .then((response) => response.json())
      .then((data) => setInfo(data));
    fetch("https://api.npoint.io/b27b6018b8ca727e199c")
      .then((response) => response.json())
      .then((data) => {
        setProjectInfo(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
    fetch("https://api.npoint.io/75cb2ba24c9236d1e6f3")
      .then((res) => res.json())
      .then((data) => setPhotoshopImage(data));
    fetch("https://api.npoint.io/b27b6018b8ca727e199c")
      .then((response) => response.json())
      .then((data) => {
        setProjectInfo(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
    fetch("https://api.npoint.io/75cb2ba24c9236d1e6f3")
      .then((res) => res.json())
      .then((data) => setPhotoshopImage(data));
  }, []);

  return (
    <div className="App ">
      <BrowserRouter>
        {/* <CircularCursor /> */}
        <Header />

        <IconLink />
        <Routes>
          <Route path="/" element={<Home info={info} />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route
            path="/experience"
            element={
              <>
                <Experience
                  filterByCategory={filterByCategory}
                  newCat={newCat}
                  itemData={itemData}
                />
              </>
            }
          />
          <Route
            path="/project"
            element={
              <Project
                projectInfo={projectInfo}
                photoshopImage={photoshopImage}
                loading={loading}
              />
            }
          />
          <Route
            path="/project/:id"
            element={<ProjectDetails projectInfo={projectInfo} />}
          />
        </Routes>
      </BrowserRouter>
      {/* <Canvas /> */}
    </div>
  );
}

export default App;
