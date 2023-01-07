import React,{memo} from 'react'
function home(props) {
    console.log('render Home component')
  return (
    <>
     <div>home2</div>
     {props.children}
    </>
   
  )
}
export default memo(home);