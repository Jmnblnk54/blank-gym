import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Splash from "./Views/Splash";
import Menu from "./Views/Menu";
import AboutUs from "./Views/AboutUs";



function App()  {
  
  // const { isLoading } = useAuth0;
  // if (isLoading ) {
  //   return <Loading />;
  // }

  return (
    <Router>
      <Switch>
        <Route path="/" component={ Splash } />
        <Route path="/menu" component={ Menu } />
        <Route path="/aboutus" component={ AboutUs } />
      </Switch>
    </Router>
  )
}


export default App;
