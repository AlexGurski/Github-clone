import React from "react";
import '../../../assets/styles/finding-style.css'
import {RiUserLine} from 'react-icons/ri'

export const  NotFound = () => {      
    return(
            <div className="container ">
                <div className="container_group">
                    <RiUserLine className="no_person"/>
                    <span>User not found</span>
                </div>
            </div>
    )
}
