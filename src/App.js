import React from "react";
import { Header } from "./modules/header";
import { StartPage } from "./pages/startPage/startPage";
import { FindedPage } from "./pages/findedPage/findedPage";
import './StylesGlobal/global-style.css'
import {Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
   <>
      <Header/>
      <Routes>
        <Route path="/" element={ <StartPage/>}/>
        <Route path="/:id" element={ <FindedPage/> }/>
      </Routes>
   </>
  );
}

export default App;
