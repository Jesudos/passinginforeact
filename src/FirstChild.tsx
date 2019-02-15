import * as React from 'react';

class FirstChild extends React.Component<props,state> {

  constructor(param :props){
    super(param)
    this.state={
      fieldValue : ""
    }
    this.update=this.update.bind(this);
  }
  update(e: React.FormEvent<HTMLInputElement>){
     console.log(e.currentTarget.value);
     this.props.onUpdate(e.currentTarget.value);
     this.setState({
       fieldValue:e.currentTarget.value
     });
  }
    

    render() {
      return (
        <div>
          <h4>First Child</h4>
          <input type="text" placeholder="Type here" onChange={this.update} value={this.state.fieldValue}/>
        </div>

      );
    }
  }
  export interface props{
    onUpdate: any
  }
  export interface state{
    fieldValue:string
  }
  
  export default FirstChild;