import { Route, Switch } from "react-router-dom";
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



function App() {
  return (
    <>
    
    <Head/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/webdevelopmet" component={Webdev}/>
    <Route exact path="/androiddevelopmet" component={Androiddev}/>
    <Route exact path="/datascience" component={Datascience}/>
    <Route exact path="/blockchain" component={Blockchain}/>
    <Route exact path="/ai&ml" component={Aiml}/>
    </Switch>
    <Footer/>
    
    </>
  );
}

export default App;
