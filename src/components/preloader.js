import React from "react";
import '../assets/styles/preloader.css'

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
            <div className="loader loaderRepo"></div>
        </div>
        
    )
}
export {Preloader, PreloaderRepo}