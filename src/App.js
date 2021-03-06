import { Route, Switch } from "react-router-dom";
import "./app.css";

import Head from "./components/Head";
import Home from "./com/Home";
import About from "./com/About";
import Contact from "./com/Contact";
import Footer from "./components/Footer";
import Webdev from "./com/Webdev";
import Androiddev from "./com/Androiddev";
import Datascience from "./com/Datascience";
import Blockchain from "./com/Blockchain";
import Aiml from "./com/Aiml";
import Login from "./com/Login";
import Signup from "./com/Signup";



function App() {
  return (
    <>
    
    <Head/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/webdevelopment" component={Webdev}/>
    <Route exact path="/appdevelopment" component={Androiddev}/>
    <Route exact path="/datascience" component={Datascience}/>
    <Route exact path="/blockchain" component={Blockchain}/>
    <Route exact path="/ai&ml" component={Aiml}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/signup" component={Signup}/>
    </Switch>
    <Footer/>
    
    </>
  );
}

export default App;
