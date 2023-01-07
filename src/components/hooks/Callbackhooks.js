import React, { useCallback, useEffect, useState,useMemo } from 'react'
import Todos from '../hooks/Todos';

export default function CallbackHooks() {
    const [count,setCount]=useState(0);
    const [todos,setTodos]=useState([]);
    const expensiveCalculation = (num) => {
      console.log("Calculating...");
      for (let i = 0; i < 1000000000; i++) {
        num += 1;
      }
      return num;
    };
  
    const calculation = useMemo(()=>expensiveCalculation(count),[count]);
    //const calculation = expensiveCalculation(count);
    const incement=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        console.log('component re-render')
    },[])
    const addTodo=useCallback(()=>{setTodos(prev=>[...prev,`new Entry`]);},[todos])
    //const addTodo=setTodos(prev=>[...prev,`new Entry`]);
   /*  const addTodo=()=>{
        setTodos(prev=>[...prev,`new Entry`]);
    } */
    const newObj={
      name:'ankul',
      phone:"9917323598",
      email:"ankul@gmail.com"
    } 
  return (
    <>
    <Todos todos={todos} addTodo={addTodo} />
    <hr />
    <div>count: {count}</div>
    <h2>Expensive Calculation:  {calculation}</h2>
       
    <button onClick={incement}>+</button>
    </>
  )
}

