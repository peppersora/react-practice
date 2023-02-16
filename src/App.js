import { useCallback, useEffect, useRef, useState } from "react";

import { json, Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import News from "./News";
import NewsList from "./NewsList";
import NewsPage from "./pages/NewsPage";


const App = () => {
 
  return(
   <Routes>
    <Route path="/" element={<NewsPage/>}/>
    <Route path="/:category" element={<NewsPage/>}/>
   </Routes>

  );
};
export default App;
