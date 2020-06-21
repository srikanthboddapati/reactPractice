
import React, { Component }  from 'react';
function UserGreeting(props){
  return <p>welcomeback</p>
}
function GeetGreeting(props){
return <p>please sign up.</p>
}

function Greeting(props){
  const isLoggedin = props.isLoggedin;
  if(isLoggedin){
    return <UserGreeting/>
  }
  return <GeetGreeting/>
}
function IsLoggedInUser(props){
   return (
       <div>
           <button onClick = {props.onClick}>Loggin</button>
       </div>
   );
}

function IsLoggedOutUser(props){
   return (
       <div>
           <button onClick = {props.onClick}>Loggout</button>
       </div>
   );
}
class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedin :false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickin = this.handleClickin.bind(this);
    }
    handleClick(){
        this.setState({isLoggedin : false});
    }
    handleClickin(){
        this.setState({isLoggedin : true});
    }
    render() {
        const isLogged = this.state.isLoggedin;
        return (
            <div>
                <Greeting isLoggedin = {isLogged}/>
                 <div>
                     {isLogged ?
                       <IsLoggedOutUser onClick = {this.handleClick}/> :
                       <IsLoggedInUser onClick = {this.handleClickin}/>
                     }
                 </div>
            </div>
        );
    }
}
export default LoginControl;