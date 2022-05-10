import React from "react";
import "./header-style.css"
import {useNavigate}  from 'react-router-dom'
import {FaGithub} from 'react-icons/fa';
import {FiSearch} from'react-icons/fi';
export const  Header = () => {
    const navigate = useNavigate();
    return(
        <>
            <div className="header">
                <FaGithub className="icon"/>
                <div className="header_textbox">
                    <FiSearch className="header_textbox_icon"/>
                    <input type='text' name="username" onKeyPress={ ( async e =>{
          if (e.key==='Enter'){
            navigate("/"+e.target.value); 
          }
      } 
        )}/>
                </div>
            </div>
        </>
    )
}

