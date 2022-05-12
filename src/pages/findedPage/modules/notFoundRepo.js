import React from "react";
import '../finding-style.css'
import {FaRegWindowClose} from 'react-icons/fa'
export const  NotFoundRepo = () => {      
    return(
            <div className="container ">
                <div className="container_group">
                    <FaRegWindowClose width={'100%'} height={'100%'} className="person"/>
                    <span>Repository list is empty</span>
                </div>
            </div>
    )
}
