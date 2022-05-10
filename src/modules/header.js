import React from "react";
import "./style.css"
import {Link}  from 'react-router-dom'
import {FaGithub} from 'react-icons/fa';
export const  Header = () => {
    return(
        <>
            <div className="header">
                <div className="header_container">
                    <FaGithub className="icon"/>
                    <input type='text'/>
                </div>
            </div>
        </>
    )
}

