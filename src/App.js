import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Route exact path="/" component={About}/>
        <Route exact path="/portfolio" component={Portfolio}/>
      </>
    </Router>
  );
}

export default App;
