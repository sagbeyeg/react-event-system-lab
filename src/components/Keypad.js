// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
  eventHandler = (e) => {
    console.log("Entering password...")
  }
  render() {
    return (
    <input onKeyUp={this.eventHandler} type="password" />
  )
  }
}
