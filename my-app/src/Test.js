import React from 'react';
function FormatDate(props){
    return props.date.toLocaleDateString();
   }
   function Avater(props){
       return (
           <div>
              <img src= {props.url}/>
           </div>
       );
   }
   function UserInfo(props){
     return (
         <div className="avatar">
           <Avater url = {props.author.avatarUrl}/>
           <p>{props.author.name}</p>
         </div>
     );
   }
   
    function Test(props){
       return (
           <div className = "user-info">
              <UserInfo  author = {props.author}/>
              <div className = "Comment-text">
               <p>{props.text}</p>
              </div>
              <div className = "Comment-date">
                   <FormatDate date = {props.date}/>
              </div>
           </div>
       );
   }
   
export default Test;
