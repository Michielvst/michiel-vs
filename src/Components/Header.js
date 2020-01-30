import React from 'react';

class Header extends React.Component {

  render() {
    return(
      <div className="nameHeader" >
        <h1 className="nameText" onClick={this.props.scrollDown}>Michiel Van Steen</h1>
      </div>
    )
  }
}

export default Header;