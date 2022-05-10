import React from "react";
import '../finding-style.css'
import {RiUserLine} from 'react-icons/ri'
export const  NotFound = () => {      
    return(
            <div className="container ">
                <div className="container_group">
                    <RiUserLine className="person"/>
                    <span>User not found</span>
                </div>
            </div>
    )
}
