import { useState } from "react"
 
export default function Counter(){
    const [count, setCount] = useState(0);
    function handelCounter (){
        const newCount = count + 1;
        setCount(newCount);
    }
    return(
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={handelCounter}>count</button>
        </div>
    )
}