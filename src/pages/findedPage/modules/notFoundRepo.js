import React from "react";
import '../finding-style.css'
import {BiRectangle} from 'react-icons/bi'
export const  NotFoundRepo = () => {      
    return(
            <div className="container ">
                <div className="container_group">
                    <BiRectangle className="person"/>
                    <span>Repository list is empty</span>
                </div>
            </div>
    )
}
