import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar/index";
import Wrapper from "./components/Wrapper";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <Router>
       
      <Wrapper>
        <NavBar />
        <Route exact path="/" component={About}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        
      </Wrapper>
      <Footer />  
    </Router>
  );
}

export default App;
