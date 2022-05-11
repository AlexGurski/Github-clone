import React from "react";
import '../finding-style.css'
import {HiUsers, HiUser} from 'react-icons/hi'
import {BiRectangle} from 'react-icons/bi'

export const  Found = (props) => {
         
    return(
        <div className="found">
            <div className="found_user">
                {console.log(props.user) }
                <img src={props.user.avatar_url}/>
                <span className="found_user_name">{props.user.name}</span>
                <a href={props.user.html_url} target="_blank" className="found_user_login">{props.user.login}</a>
                <div className="found_user_folow">
                    <span><HiUsers/>{`${props.user.followers} followers`}</span>
                    <span><HiUser/>{` ${props.user.following} following`}</span>
                </div>
            </div>
            <div className="found_repo">
                
            </div>
        </div>
    )
}
