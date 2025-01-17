import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)


    }

  return (
   <div>
    <div>cout : {count}</div>
    <button onClick = {increment} >increment</button>
    </div>
  )
}



export default Counter