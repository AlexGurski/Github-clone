import React from "react";
import { Header } from "./layouts/header";
import { Homepage } from "./pages/homepage";
import { FindPage } from "./pages/findPage";

import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
   <>
      <Header/>
      <Routes>
        <Route path="/" element={ <Homepage/>}/>
        <Route path="/:id" element={ <FindPage/> }/>
      </Routes>
   </>
  );
}

export default App;
