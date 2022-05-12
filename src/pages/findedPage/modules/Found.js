import React,{useEffect, useState} from "react";
import '../finding-style.css'
import {HiUsers, HiUser} from 'react-icons/hi'
import { FoundRepo } from "./FoundRepo";
import { Octokit } from "octokit";
import { Preloader } from "../../../modules/preloader";
import { NotFoundRepo } from "./notFoundRepo";
import { roundFollower } from "../../../modules/rounding";
import { roundRepos } from "../../../modules/rounding";

const octokit = new Octokit();

export const  Found = (props) => {

    const [repository,setRepository] = useState([]);

    const  searchRepo = async (page, login=props.user.login ) =>{
        try {
        const response = await octokit.request(`GET /users/${login}/repos`, {
            username: login,
            per_page:4,
            page:page,
            sort:'pushed',
          })
          setRepository(response.data)
           } catch (error) {
            setRepository(false)
            console.error(error) 
        }
      }

    useEffect(()=>{
            setRepository('load');
            searchRepo(1, props.user.login) 
    },[props])

    return(
        <div className="found">
            <div className="found_user">
                <img src={props.user.avatar_url}/>
                <span className="found_user_name">{props.user.name}</span>
                <a href={props.user.html_url} target="_blank" className="found_user_login">{props.user.login}</a>
                <div className="found_user_folow">
                    <span><HiUsers/>{`${roundFollower(props.user.followers)} followers`}</span>
                    <span><HiUser/>{` ${roundFollower(props.user.following)} following`}</span>
                </div>
            </div>
            <div className="found_repo">
                {repository==='load'?<Preloader/>:repository.length>0?<FoundRepo repository={repository} length={props.user.public_repos} nextPage={(page)=>searchRepo(page)}/>:<NotFoundRepo/>}
            </div>
        </div>
    )
}
