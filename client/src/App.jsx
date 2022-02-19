// Import components from './components' folder
import { Navbar, Flag, CardHome } from "./components";

// Import components from './container' folder
import { Footer, Header, ConvertHome } from "./container";

const App = () => {
  return (
    <div className="App">
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
