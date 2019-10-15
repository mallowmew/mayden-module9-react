import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
import ClassComponent from './components/ClassComponent/ClassComponent';
import JSinJSX from './components/JavaScriptInJSX/JavaScriptInJSX';
import {Panda, Owl, Owlcat} from './components/Owlcat/Owlcat';
import CoinToss from './components/CoinToss/CoinFlip';
import StatefulComponent from './components/StatefulComponent/StatefulComponent';
import EventfulComponent from './components/EventfulComponent/EventfulComponent';
import ChangingImage from './components/ChangingImage/ChangingImage';
import ParentComponent from './components/ParentComponent/ParentComponent';
import Clock from './components/Clock/Clock';
import Freddo from './components/Freddo/Freddo';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header heading="Functional Component" />
      <FunctionalComponent />
      <Header heading="Class Component" />
      <ClassComponent />
      <Header heading="Doing JavaScript in JSX" />
      <JSinJSX />
      <Header heading="Owlcat" />
      <div className="owlcat">
        <Panda />
        <Owl />
        <Owlcat />
      </div>
      <Header heading="Coin Flip"/>
      <CoinToss />
      <Header heading="State in Components"/>
      <StatefulComponent />
      <Header heading="Events"/>
      <EventfulComponent />
      <ChangingImage />
      <Header heading="Components Inside Components"/>
      <ParentComponent />
      <Header heading="Updating Component"/>
      <Clock />
      <Header heading="Submitting Form Data"/>
      <Header heading="Pulling API Data"/>
      <Freddo />
      <Footer />
    </div>
  );
}

export default App;
