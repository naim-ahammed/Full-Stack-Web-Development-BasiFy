//rfc ---> React Function
//rfce ---> reactFunctiona1ExportComponent


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

//   let x = "Naim Ahammed";
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


// const App = () => {

//   let data = "boy";

//   return (
//     <div>
//       {data==="boy"?<h1>Boy</h1>:<h1>Girl</h1>}
//     </div>
    
//   )
// }

// export default App


// const App = () => {

//   const onClickBtn = ()=>{
//     console.log("click ");
//   }

//   return (
//     <div>
//       <button onClick={()=>{onClickBtn()}}>Click me</button>
//     </div>
    
//   )
// }

// export default App



// const App = () => {


//   let x = 0;

//   const onClickBtn = ()=>{
//     console.log("click ");
//     x++;
//     console.log(x);

//   }

//   return (
//     <div>
//       {x}
//       <button onClick={()=>{onClickBtn()}}>Click me</button>
//     </div>
    
//   )
// }

// export default App


// import {useState} from "react";
// import FristComponent from "./components/FristComponent";

// const App = () => {

//   // const [x,setx] = useState(0);

//   const [x,setx] = useState(0);


//   const onClickBtn = ()=>{
//     console.log("click ");
//     setx(x+1);
//     console.log(x);

//   }

//   return (
//     <div>
//       {/* {x} */}
//       <button onClick={()=>{onClickBtn()}}>Click me</button>
//       <FristComponent data={x}/>
//     </div>
    
//   )
// }

// export default App



// import {useState} from "react";
// import FristComponent from "./components/FristComponent";

// const App = () => {

//   // const [x,setx] = useState(0);

//   const [x,setx] = useState(0);


//   const onClickBtn = ()=>{
//     console.log("click ");
//     setx(x+1);
//     console.log(x);

//   }

//   var tempStyle ={
//     color:'red',
//     backgroundColor:'blue'

//   }

//   return (
//     <div className="div" style={tempStyle}>
//       {/* {x} */}
//       <button style={{color:'red'}} onClick={()=>{onClickBtn()}}>Click me</button>
//       <FristComponent data={x} fn={setx}/>
//     </div>
    
//   )
// }

// export default App


// =========================================== 

// import React from 'react';

// const App = () => {
//   return (
//     <div>
//       <FunctionName></FunctionName>
//     </div>
//   );
// }

// //React Components
// function FunctionName(){
//   return(
//     <div>
//     <h1>function Name</h1>
//     </div>
//   );
// }

// export default App;

// =========================================== 

import React, { useEffect, useState } from 'react';

function App() {

    const [users, setUsers] = useState([]); // Renamed 'count' to 'users'

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data)) // Store fetched data in state
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

  const nayoks = ['bappa raz', 'salman']
  return (

    <div>
      <Nayok name="sakib" age="57" > </Nayok>
      <Nayok name="fahim" age="52" > </Nayok>
      <Nayok name="khan" age="50" > </Nayok>
      <Nayok name={nayoks[1]}  > </Nayok>

    <div>
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
     </ul>
    </div>

    </div>


    
  )
}

function Nayok(props){
  // console.log(props)
  //css obj
  const myStyle = {
    color: "blue",
    backgroundColor: "yellow"
  }
  return (
    <div style={{border:'2px solid red', textAlign:'center', padding: '10px'}}>
        <h1 >ami nayok - {props.name} </h1>
        <h1 >my age is - {props.age || 20 } </h1>

        <button style={myStyle}> click here</button>

    </div>
  );
}

export default App;



