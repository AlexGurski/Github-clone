import React from "react";
import '../assets/styles/finding-style.css'
import {RiUserLine} from 'react-icons/ri'
import {MdCancelPresentation} from 'react-icons/md'

const  NotFound = () => {      
    return(
            <div className="container ">
                <div className="container_group">
                    <RiUserLine className="no_person"/>
                    <span>User not found</span>
                </div>
            </div>
    )
}

 const  NotFoundRepo = () => {      
    return(
            <div className="container_repo container">
                <div className="container_group">
                    <MdCancelPresentation  className="no_person"/>
                    <span>Repository list is empty</span>
                </div>
            </div>
    )
}
export {NotFound, NotFoundRepo}