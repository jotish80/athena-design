import "./App.css";

import Header from "./Components/Header";
import WhatWeDo from "./Components/WhatWeDo";
import RunningProject from "./Components/RunningProject";
import DedicatedTeam from "./Components/DedicatedTeam";
import GetDesign from "./Components/GetDesign";
import Footer from "./Components/Footer";
import Achievements from "./Components/Achievements";
import NavBar from "./Components/NavBar";
import studio from "../src/images/STUDIO.png";
function App() {
  return (
    <div className="App">
      <div style={{ backgroundImage: `url(${studio})` }}>
        <NavBar />
        <Header />
      </div>
      <WhatWeDo />
      <RunningProject />
      <Achievements />
      <DedicatedTeam />
      <GetDesign />
      <Footer />
    </div>
  );
}

export default App;
