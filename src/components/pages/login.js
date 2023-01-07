import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState,useRef,useEffect,memo, useMemo,useCallback} from 'react';
function BasicExample(props) {
    const[myData,setMyData]=useState("");
    //const[count,setCount]=useState(0);
    const paragraph=useRef('');
    const count=useRef(0)
     useEffect(()=>{
        count.current=count.current+1;
        paragraph.current.style.backgroundColor="red";
        console.log('useEffect render')
        
     },[])
    console.log('render login component');
    const handleSubmit=(event)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData,formData.entries())
        let formObject = Object.fromEntries(formData.entries())
    console.log(formObject)
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
          }
    }
    //const handleChange=(event)=>setMyData(event.target.value);
    const handleChange = useCallback(event => {
        console.log('Clicked Item : ', event.currentTarget);
        setMyData(event.target.value);

      }, [myData]);
  return (
    <>
    <input 
    type="text" 
    value={myData} 
    onChange={handleChange} />
    <p ref={paragraph}>The number of times Renders:{count.current}</p>
    <Form className={props.className} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="username" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="remember" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default memo(BasicExample);