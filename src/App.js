import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />

        <Route exact path="/react-portfolio/" component={About} />
        <Route path="/react-portfolio/portfolio" component={Portfolio} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
