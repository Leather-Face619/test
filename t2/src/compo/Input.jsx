import React from 'react'

export const Input = ({input,setinput}) => {
  return (
   <>
   <input type="text" placeholder='enter anything' value={input} onChange={(e)=>{setinput(e.target.value)}} 
   ></input>
   </>
  )
}



export const Output = ({input}) => {
  return (
    <div>Current value is = {input}</div>
  )
}

 

 