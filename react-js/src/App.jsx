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



import React from 'react';

const App = () => {
  return (
    <div>
      <FunctionName></FunctionName>
    </div>
  );
}

//React Components
function FunctionName(){
  return(
    <div>
    <h1>function Name</h1>
    </div>
  );
}

export default App;




