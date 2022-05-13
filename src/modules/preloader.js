import React from "react";
import './preloader.css'

 const  Preloader = () => {

    return(
        <div className="container">
            <div className="loader"></div>
        </div>
        
    )
}

const  PreloaderRepo = () => {

    return(
        <div className="container">
            <div className="loaderRepo"></div>
        </div>
        
    )
}
export {Preloader, PreloaderRepo}