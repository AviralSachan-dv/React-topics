import { useState } from 'react'
import Counter from './counter';
import Input from './input';
import List from './List';
//import React from 'react'


function App() {
  const [data, setData] = useState("Avi")
  const onUpdate = () => {
  //  let data= "sachan"
    setData ("Aviral Sachan")
    alert(data);
    

  }
  return (
    <>
    <div className='container'>
    <h1>{data}</h1>
    <button onClick={()=>onUpdate()}>click update</button>
    <br></br>
    <Counter/>
    
    <br></br>
    <Input/>
    <br></br>
    <br></br>
    <List/>
   
    </div>

    </>
    
  )
}

export default App

