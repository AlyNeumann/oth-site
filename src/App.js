import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Music from './Components/Music';
import Shows from './Components/Shows';
import Epk from './Components/Epk';
import Navbar from './Components/CustomNavbar';
import AOS from 'aos';



class App extends Component {
 
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
          
          <Route exact strict path='/' component={Home} />
          <Route  path='/about' component={About} />
          <Route  path='/gallery' component={Gallery} />
          <Route  path='/music' component={Music} />
          <Route  path='/shows' component={Shows} />
          <Route  path='/epk' component={Epk} />
        </div>
      </HashRouter>
    )

  }
}

export default App;
