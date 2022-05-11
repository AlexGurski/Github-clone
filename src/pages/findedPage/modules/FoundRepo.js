import React,{useEffect, useState} from "react";
import '../finding-style.css'

export const  FoundRepo = (props) => {

    return(
        <div className="repository">
            <h1>{'Repositories ('+ props.repository.length+')'}</h1>
            {props.repository.map(el=>
                <div className="repository_item" key={el.id}>
                    <div>{el.name}</div>
                    <div>{el.private}</div>
                </div>
            )}
        </div>
    )
}
