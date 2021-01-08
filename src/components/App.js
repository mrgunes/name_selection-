import React from 'react';
import { Select } from './Select';
import { Name } from './Name';
//import {names} from './names';

export class App extends React.Component {
  
  constructor(props){
  super(props);

    this.state = {
     name:'',
    }

    this.changeName = this.changeName.bind(this);
 
    

  }

  changeName(param){
    this.setState({
    name:param,
    

    })
  }

  // setInput(proterty,value){
  //   this.setState({
  //     [proterty]:value

  //   })


  // }


  render() {
    return (
      <div>
        <Select onChange={this.changeName}/>
        <Name name={ this.state.name} />
        
      </div>
    );
  }
}

