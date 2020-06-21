import React, { Component }  from 'react';
class Toggle extends React.Component {
    constructor(props){
      super(props);
      this.state = {toggle : true};
      this.handleClick = this.handleClick.bind(this);

    }
    handleClick(){
        this.setState(state => ({
            toggle : !state.toggle
           }));
    }
    render(){
        return(
            <div>
                <button onClick = {this.handleClick}>{this.state.toggle ? 'on':'off'}</button>
            </div>
        );
    }
}

export default Toggle;