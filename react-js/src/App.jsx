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

// 
// const App = () => {

//   let x = "NaimAhammed";
//   let array = ["apple", "mango", "banana"]

//   return (
//     <div>
//       {x}
//       {array.map((user) => {return <h2>{user}</h2>})}
//     </div> 
//   )
// }

// export default App
// 

const App = () => {

  let data = "boy";

  return (
    <div>
      {data==="boy"?<h1>Boy</h1>:<h1>Girl</h1>}
    </div>
    
  )
}

export default App