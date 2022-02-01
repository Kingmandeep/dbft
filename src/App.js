import { Route, Switch } from "react-router-dom";
import Head from "./components/Head";
import Home from "./com/Home";
import About from "./com/About";
import Contact from "./com/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <>
    
    <Head/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    </Switch>
    <Footer/>
    
    </>
  );
}

export default App;
