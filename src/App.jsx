import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';

const App = () => (


    <div className='container'>
      <BrowserRouter>
       <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/blog/:id' element={<Blog/>}/>
          <Route to='/' />
       </Routes>
      </BrowserRouter>
    </div>
)

export default App























































// import "./App.css";
// import Post from "./Component/Post";
// import { useEffect, useState } from "react";

// function App() {
//   const [postData,setPostData]=useState([])

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response)=>response.json())
//     .then((data)=>setPostData(data))
//   },[])
//   return (
//     <>
//       <h1> Priya Blog</h1>
//        {
//         postData.map((data,index)=>{
//           return(
//             <Post key={index} userId={data.userId} id={data.id} body={data.body} title={data.title}/>
//           )
//         })
//        }
     
//     </>
//   );
// }

// export default App;
