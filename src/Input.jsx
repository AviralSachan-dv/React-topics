import  { useState } from 'react'

function Input() {
    const [inputValue, setInputValue] = useState("")
    const[inputValueShow, setInputValueHide] = useState(false)

    const handleChange = (e) => {
        setInputValue(e.target.value)
        console.log(e.target.value)
       setInputValueHide(false)
        
    }
  return (
    <div className='container'>
        <h1>{inputValueShow ? inputValue : " "}</h1>

    <input  onChange = {handleChange} ></input>
    <button onClick={()=>setInputValueHide(true)}>submit</button>
    
    </div>
  )
}

export default Input