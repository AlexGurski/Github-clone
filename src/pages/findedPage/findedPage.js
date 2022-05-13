import React, { useEffect, useState } from "react";
import '../../assets/styles/finding-style.css'
import { useParams} from 'react-router-dom'
import { NotFound } from "./modules/notFound";
import { Found } from "./modules/Found";
import { Preloader } from "../../modules/preloader";
import { searchUser } from "../../modules/search";

export const  FindedPage = () => {
  const {id} =  useParams();
  const [status, setStatus] = useState('')

  useEffect(()=>{
    setStatus('load');
    searchUser(id)
            .then(el=>setStatus(el))
  },[id])

  return(
        <div className="accept">
            {status === 'load' ? 
                <Preloader/> :
                status ? 
                    <Found user={status}/> :
                    <NotFound/>}
        </div>
    )
}
