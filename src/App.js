import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/index";
import Wrapper from "./components/Wrapper";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <Router>
       
      <Wrapper>
        <Navbar />
        <Route exact path="/" component={About}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        
      </Wrapper>
      <Footer />  
    </Router>
  );
}

export default App;
