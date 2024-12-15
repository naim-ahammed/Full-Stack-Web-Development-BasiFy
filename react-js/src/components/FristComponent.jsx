// import React from 'react'

// const FristComponent = (props) => {
//   return (
//     <div>
//         {props.data}
//         </div>
//   )
// }

// export default FristComponent


const FristComponent = ({data,fn}) => {
    return (
      <div>
        <button onClick={()=>{fn(10)}}>set 10</button>
          {data}
          </div>
    )
  }
  
  export default FristComponent