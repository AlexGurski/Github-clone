import React, { useEffect, useState } from "react";
import '../assets/styles/finding-style.css'
import { useParams} from 'react-router-dom'
import { NotFound } from "../components/notFound";
import { Found } from "../components/FoundUser";
import { Preloader } from "../components/preloader";
import { searchUser } from "../modules/search";

export const  FindPage = () => {
  const {id} =  useParams();
  const [status, setStatus] = useState('')

  useEffect(()=>{
    setStatus('load');
    searchUser(id)
            .then(el=>setStatus(el))
  },[id])

  return(
        <div className="find_page">
            {status === 'load' ? 
                <Preloader/> :
                status ? 
                    <Found user={status}/> :
                    <NotFound/>}
        </div>
    )
}
