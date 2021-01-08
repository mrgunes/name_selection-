import React from 'react';
import {wishes} from './wishes';
class Name extends React.Component {
  render() {
      console.log(this.props.name)
    return (
      <div>
        <h1>Hey, my name is {this.props.name}!</h1>
        <h2>Don't you think {this.props.name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked <br/> <br/> {wishes[Math.floor(Math.random() * wishes.length)]}</h2>
      </div>
    );
    
  }
}

export{Name};