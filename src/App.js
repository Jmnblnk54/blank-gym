import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Navbar";
import Footer from './components/Footer';


class App extends Component {

  state = {};

  render () {
    return (
      <div>
        <Wrapper>
          <Header />
        </Wrapper>
        <Footer />
      </div>
      
  );
  }
}

export default App;
