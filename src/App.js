import React from "react";
import { Header } from "./layouts/header";
import { StartPage } from "./pages/startPage/startPage";
import { FindedPage } from "./pages/findedPage/findedPage";

import {Routes, Route} from 'react-router-dom'
const App = () => {
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
