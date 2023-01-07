import React,{memo} from 'react'

function Todos({todos,addTodo}) {
    console.log('child render!')
    
  return (
    <>
    <h2>Todos</h2>
    { todos.map((todo,index)=>{
     return <p key={index}>{todo + index}</p>
  })}
  <button onClick={addTodo}>Add Todo</button>
  </>
  );
}

export default memo(Todos);