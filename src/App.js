import React from "react";
import { Header } from "./modules/header";
import { MainPage } from "./pages/mainPage";
import './StylesGlobal/style.css'
import {Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
   <>
      <Header/>
      <Routes>
        <Route path="/" element={ <MainPage/>}>
         
        </Route>
      </Routes>
   </>
  );
}

export default App;
