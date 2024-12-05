// 


// const App = () => {
//   return(
//     <div>

//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Navbar from "./components/Navbar"

const App = () => {

  let x = "Naim Ahammed";
  let array = ["apple", "mango", "banana"]

  return (
    <div>
      {x}
      {array.map((user) => {return <h2>{user}</h2>})}
    </div>
  )
}

export default App