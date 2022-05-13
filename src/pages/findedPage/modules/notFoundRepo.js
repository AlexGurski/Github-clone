import React from "react";
import '../finding-style.css'
import {MdCancelPresentation} from 'react-icons/md'
export const  NotFoundRepo = () => {      
    return(
            <div className="container_repo container">
                <div className="container_group">
                    <MdCancelPresentation  height={'100%'} className="person"/>
                    <span>Repository list is empty</span>
                </div>
            </div>
    )
}
