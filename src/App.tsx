import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';

class App extends React.Component<props,state> {

  constructor(param:props){
    super(param);
    this.state={
      fieldValue :""
    }
    this.onUpdate=this.onUpdate.bind(this);
  }
  onUpdate=(val :string)=>{
    this.setState({
      fieldValue :val
    });
  }
  render() {
    return (
      <div>
       <h2>Parent</h2>
       Value in Parent Component state : {this.state.fieldValue}
       <br/>
       <FirstChild onUpdate={this.onUpdate}/>
       <br/>
       <SecondChild passedValue={this.state.fieldValue}/>
     </div>
    );
  };
}
export interface props{

}
export interface state{
   fieldValue:string
}

export default App;
