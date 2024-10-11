import React, { useState } from 'react'
import { Input,Output } from './compo/Input'

const App = () => {
  const [input, setinput] = useState('')
  // Lifting state up example
  return (
    <div>
      <Input input={input} setinput={setinput}/>
      <Output input={input}/>
    </div>
  )
}

export default App