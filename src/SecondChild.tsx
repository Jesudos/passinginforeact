import * as React from 'react';

class SecondChild extends React.Component<props,state>{

    constructor(param:props){
        super(param);
    }
    render(){
        return(
            <div> 
                <h4>Second Child</h4>
                value in Second Child Props : {this.props.passedValue}
            </div>
           
           
        );
    }
}
export interface props{
 passedValue:string
}
export interface state{

}

export default SecondChild;