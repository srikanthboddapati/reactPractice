import React from 'react';

class Login extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        email: "",
        password: ""
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleChangeUseName = this.handleChangeUseName.bind(this);
      this.handleUserPassword = this.handleUserPassword.bind(this);
    }
    
    handleChangeUseName = (event)=>{
      event.preventDefault();
      this.setState({
          email:event.target.value
      })
    }

    handleUserPassword = (event)=>{
        event.preventDefault();
        this.setState({
            password : event.target.value
        })
    }
    handleClick = (event)=> {
      event.preventDefault();
      console.log(this.state.email);
      console.log(this.state.password);
    }
    render() {
        return(
           <div>
               <input 
                 type="text" 
                 placeholder="email" 
                 name="username" 
                 value = {this.state.email}
                 onChange= {this.handleChangeUseName}
               />
               <input 
                  type="text" 
                  placeholder="password" 
                  name="password" 
                  value = {this.state.password}
                  onChange= {this.handleUserPassword}
               />
               <button 
                 onClick = {this.handleClick}>Login
               </button>
           </div>
        )
    }
}

export default Login;