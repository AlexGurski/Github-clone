import React, { useEffect, useState } from "react";
import './finding-style.css'
import { useParams} from 'react-router-dom'
import { NotFound } from "./modules/notFound";
import { Found } from "./modules/Found";
import { Preloader } from "../../modules/preloader";
export const  FindedPage = () => {
    
    const {id} =  useParams();
    const [status, setStatus] = useState('')

    useEffect(()=>{
        setStatus('load')
            fetch(`https://api.github.com/users/${id}`)
            .then(response => {
                if (response.ok) {
                  return response.json()
                } 
              })
            .then(data => setStatus(data));    
    },[id])

    return(
        <div className="accept">
            {status==='load'?<Preloader/>:status?<Found user={status}/>:<NotFound/>}
        </div>
    )
}
