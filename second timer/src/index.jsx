import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css'
import List from './List'

  const App = () =>{
    const [count, updatecount] = useState(0);
   useEffect(()=>{
    setTimeout(()=>{
      updatecount(count+1)
    },1000)
   });
   
  
    return(
    <div>
      <h1>server is running from this time :{count}s </h1>
    </div>
    )
  }

 
 ReactDOM.render(
  <App />,
  document.getElementById("root")
 );

 export default App;