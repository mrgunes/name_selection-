import React from 'react';
import {names} from './names';
export class Select extends React.Component {
  
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    
  
  
    }
  
    handleChange(e){
     this.props.onChange(e.target.value)

    


       
    }
    



  render() {
    return (
      <div>
        <h1>Pickup a name :</h1>
        <select id="great-names" 
        onChange={this.handleChange} >
        {names.map((kaan, eric) =>{
          return <option key={eric} value={kaan}>{kaan}</option>
        })}
        </select>
      </div>
    );
  }
}