import React, { useEffect, useState } from "react";
import './style.css'
import { useParams} from 'react-router-dom'
import { NotFound } from "./modules/notFound";
export const  FindedPage = () => {
    const {id} =  useParams();
    const [status, setStatus] = useState('')

    useEffect(()=>{
        setStatus('loading')
            fetch(`https://api.github.com/users/${id}`)
            .then(response => {
                if (response.ok) {
                  return response.json()
                } else{
                  return false
                }
              })
            .then(data => setStatus(data));    
    },[id])

    return(
        <div className="accept">
            {status?console.log(status):<NotFound/>}
           
        </div>
    )
}
