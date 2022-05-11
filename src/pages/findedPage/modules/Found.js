import React,{useEffect, useState} from "react";
import '../finding-style.css'
import {HiUsers, HiUser} from 'react-icons/hi'
import { FoundRepo } from "./FoundRepo";
import { Preloader } from "../../../modules/preloader";
import { NotFoundRepo } from "./notFoundRepo";
export const  Found = (props) => {
    const [repository,setRepository] = useState([]);


    useEffect(()=>{
            setRepository('load');
            fetch(props.user.repos_url)
            .then(response => {
                if (response.ok) {
                  return response.json()
                } 
              })
            .then(data => {setRepository(data);console.log(data)});    
    },[props])

    return(
        <div className="found">
            <div className="found_user">
                <img src={props.user.avatar_url}/>
                <span className="found_user_name">{props.user.name}</span>
                <a href={props.user.html_url} target="_blank" className="found_user_login">{props.user.login}</a>
                <div className="found_user_folow">
                    <span><HiUsers/>{`${props.user.followers} followers`}</span>
                    <span><HiUser/>{` ${props.user.following} following`}</span>
                </div>
            </div>
            <div className="found_repo">
                {repository==='load'?<Preloader/>:repository.length>0?<FoundRepo repository={repository}/>:<NotFoundRepo/>}
            </div>
        </div>
    )
}
