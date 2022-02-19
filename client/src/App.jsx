// Import components from './components' folder
import { Navbar, Flag, CardHome } from "./components";

// Import components from './container' folder
import { Footer, Header, ConvertHome } from "./container";

import "./App.css";

const App = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Header />
      <ConvertHome />
      <CardHome />
      <Flag />
      <Footer />
    </div>
  );
};

export default App;
