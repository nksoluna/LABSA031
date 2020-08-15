import React from 'react';
import './App.css';


import WordCard from './WordCard' ;
const element = <h1>Hello, world</h1>;
const word = "Hello";


function App() {
   return (
      <h1 className = "container">Welcome to "mind Guessing"
 <div className="unactiveCard">
 {
   
    <WordCard value="17046"/>
 }
  <h2 className = "buttom">กติกา : ให้ทายตัวเลขที่ปรากฏอยู่บนหน้าจอ หากสามารถทายถูก จะมีคอนโซลแสดงความยินดีโผล่ออกมา ขอให้โชคดี
  </h2> 
 </div>
 </h1>
 
 
 
 );
}


export default App;
