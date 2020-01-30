import React from 'react';
import Header from './Components/Header';
import Info from './Components/Info';
import './App.css';

class App extends React.Component {
  infoRef = React.createRef();

  scrollDown = () => {
    console.log(this.infoRef);
    this.infoRef.current.scrollIntoView({behavior: "smooth"});
  };

  render() {
  return (
    <div>
      <Header scrollDown={this.scrollDown} />
      <div ref={this.infoRef} >
        <Info />
      </div>
    </div>  
  );
  }
}

export default App;
