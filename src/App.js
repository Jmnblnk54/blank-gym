import './App.css';
import { Component } from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Navbar";
import Footer from './components/Footer';
import RenderedQuote from "./components/Quote/Quote";
// import Api from "./components/Quote/api"
import PhotoToggle from "./components/Hero/Hero";


class App extends Component {

  state = {};

  render () {
    return (
      <div>
        {/* <Wrapper> */}
          <Header />
            <div>
             <PhotoToggle />
            </div>
          <RenderedQuote />
            
          <Footer />
        {/* </Wrapper> */}
        
      </div>
      
  );
  }
}

export default App;
