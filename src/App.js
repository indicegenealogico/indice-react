import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nombres from "./pages/Nombres";
import Apellidos from "./pages/Apellidos";
import Tree from "./pages/Tree";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Banner />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/nombres" exact component={Nombres} />
          <Route path="/apellidos" exact component={Apellidos} />
          <Route path="/tree" exact component={Tree} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
