import React from 'react';

const child1=(props)=>(
    <button onClick={props.ac}/>);
    
    const child2=()=>(<>{props.chngeChild2Value}</>);
    
const p=()=>{ 
    const [value,setValue]=useState(" ");
    const chnage=()=>{setValue("set data");}
    return(
    <>
      <child1 ac={chnage} />
      <child2 changeChild2Value={value} />
    </>
    )
    }
