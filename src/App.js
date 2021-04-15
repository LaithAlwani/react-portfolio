import { HashRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/index";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <Router >
      <Wrapper>
        <Navbar />
        <Route exact path="/" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Wrapper>
      <Footer />  
    </Router>
  );
}

export default App;