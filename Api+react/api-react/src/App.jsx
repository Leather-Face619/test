import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()
    ).then(json => {
      console.log(json);
        setdata(json)
   
        // json.map((e, i) => {
        //   console.log(i + 1, e.name);
        // })

      })
  }, [])


  return (
    <div>App
      
     {
      data.map((e,i) => ( <h1 key={i}> {e.name} = {e.username}</h1>)
)
    }
    </div>
  )
}

export default App