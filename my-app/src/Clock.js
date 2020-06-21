// import React from 'react';
// function Clock(props){
//     return (
//         <div>
//             <h1>Hi</h1>
//             <p>it is {props.Date.toLocaleTimeString()}</p>
//         </div>
//     );
// }

// function Tick(){
//     return (
//         <Clock Date = {new Date()}/>
//     );
// }
// export default Tick;
import React, { Component }  from 'react';

class Clock extends React.Component {
    constructor(props){
      super(props);
      this.state = {
         Date : new Date()
      };
    }

    componentDidMount(){
      this.timerId = setInterval(() => this.tick(),1000); 
    }
    componentWillUnmount(){
      clearInterval(this.timerId);
    }
    tick(){
     this.setState({Date : new Date()});
    }
    render() {
        return (
           <div>
             <h1>hai</h1>
             <p>this is {this.state.Date.toLocaleTimeString()}</p>
           </div>
        );
    }
}

export default Clock;