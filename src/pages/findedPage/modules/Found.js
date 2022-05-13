import React,{useEffect, useState} from "react";
import '../../../assets/styles/finding-style.css'
import {HiUsers, HiUser} from 'react-icons/hi'
import { FoundRepo } from "./FoundRepo";
import { Octokit } from "octokit";
import { PreloaderRepo } from "../../../modules/preloader";
import { NotFoundRepo } from "./notFoundRepo";
import { roundFollower } from "../../../modules/rounding";

const octokit = new Octokit();

export const  Found = ({user}) => {

    const [repository,setRepository] = useState([]);

    const  searchRepo = async (page, login=user.login ) =>{
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
          //  console.error(error) 
        }
      }

    useEffect(()=>{
            setRepository('load');
            searchRepo(1, user.login) 
    },[user])

    return(
        <div className="found">
            <div className="found_user">
                <img src={user.avatar_url}/>
                <span className="found_user_name">{user.name}</span>
                <a href={user.html_url} target="_blank" className="found_user_login">{user.login}</a>
                <div className="found_user_folow">
                    <span><HiUsers/>{`${roundFollower(user.followers)} followers`}</span>
                    <span><HiUser/>{` ${roundFollower(user.following)} following`}</span>
                </div>
            </div>
            <div className="found_repo">
                {repository==='load'?
                    <PreloaderRepo/> :
                    repository.length > 0 ?
                        <FoundRepo repository={repository} length={user.public_repos} nextPage={(page)=>searchRepo(page)}/> :
                        <NotFoundRepo/>}
            </div>
        </div>
    )
}
