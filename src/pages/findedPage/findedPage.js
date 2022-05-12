import React, { useEffect, useState } from "react";
import './finding-style.css'
import { useParams} from 'react-router-dom'
import { NotFound } from "./modules/notFound";
import { Found } from "./modules/Found";
import { Preloader } from "../../modules/preloader";
import { Octokit } from "octokit";
export const  FindedPage = () => {
    
    const {id} =  useParams();
    const [status, setStatus] = useState('')
    const octokit = new Octokit(/*{ auth: `personal-access-token123` }*/);
 
      const  search = async (id) =>{
        try {
        const response = await octokit.request(`GET /users/${id}`, {
            username: id,
            per_page:100,
            page:2
          })
          setStatus(response.data)
        } catch (error) {
            setStatus(false)
            console.error(error) 
        }
      }
     useEffect(()=>{
         setStatus('load');
         search(id)
    },[id])

    return(
        <div className="accept">
            {status==='load'?<Preloader/>:status?<Found user={status}/>:<NotFound/>}
        </div>
    )
}
