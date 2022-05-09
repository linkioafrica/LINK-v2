/* eslint-disable no-unused-vars */
// Import components from './components' folder
import { Navbar, CardHome } from "./components";

// Import components from './container' folder
import { Footer, Community, Header, ConvertHome } from "./container";

import "./App.css";

const App = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Header />
      <ConvertHome />
      <CardHome />
      <Community />
      <Footer />
    </div>
  );
};

export default App;
