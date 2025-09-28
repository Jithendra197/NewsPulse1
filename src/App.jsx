import React,{ useState } from "react";
import News from "./Components/News";
import NavBar from "./Components/NavBar";
import {Route, Routes } from 'react-router-dom';

const App = () => {
  const [articles,setArticles] = useState([])
 
  return(
    <div>
      <NavBar setArticles={setArticles}/>
      <Routes>
         <Route path='/' element={<News category ='general' articles={articles} setArticles={setArticles} />} />
      <Route path='/NewsPulse1' element={<News category ='general' articles={articles} setArticles={setArticles} />}></Route>
      <Route path='/general' element={<News category ='general' articles={articles} setArticles={setArticles} />}></Route>
      <Route path='/business' element={<News category ='business' articles={articles} setArticles={setArticles} />}></Route>
      <Route path='/entertainment' element={<News category ='entertainment' articles={articles} setArticles={setArticles} />}></Route>
      <Route path='/sports' element={<News category ='sports' articles={articles} setArticles={setArticles} />}></Route>
      <Route path='/health' element={<News category ='health' articles={articles} setArticles={setArticles} />}></Route>
      <Route path='/science' element={<News category ='science' articles={articles} setArticles={setArticles} />}></Route>
      
    </Routes>
    </div>

  )
}

export default App;

