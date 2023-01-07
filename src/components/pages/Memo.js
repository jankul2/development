import React,{useEffect,useMemo, useState} from 'react'

export default function Memo() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`render component ${count}`);
    });
    const mmemoVal=useMemo(()=>{
        return (<h1>Reender again Memo {count}</h1>)
    },[count]);
  return (
    <>
       {mmemoVal}
       <h1>Reender again {count}</h1>
       <button onClick={()=> setCount(count+1)}>Count</button>
    
    </>
  )
}
