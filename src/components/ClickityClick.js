// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = (event) => {
    // Update our state here...
    // console.log(this.state.hasBeenClicked)
    this.setState({
        hasBeenClicked: !this.state.hasBeenClicked
    })

    // console.log(this.state.hasBeenClicked)
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;
