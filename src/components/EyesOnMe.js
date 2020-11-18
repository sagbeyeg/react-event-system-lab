// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
  onFocusHandler = (e) => {
      console.log("Good!")
  }

  onBlurHandler = (e) => {
      console.log("Hey! Eyes on me!")
  }

  render() {
    return (
    <button onFocus={this.onFocusHandler} onBlur={this.onBlurHandler}>I'm a Button</button>
  )
  }
}
