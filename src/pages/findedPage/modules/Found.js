import React from "react";
import '../finding-style.css'
export const  Found = (props) => {
         
    return(
        <div className="found">
           {console.log(props.user) }
           <img src={props.user.avatar_url}/>
           <span>{props.user.name}</span>
           <span>{props.user.login}</span>
           <span>{props.user.followers}</span>
           <span>{props.user.following}</span>
        </div>
    )
}
