import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
        <Route path="/react-portfolio">
          <Redirect to="/" />
           <About />
        </Route>
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
