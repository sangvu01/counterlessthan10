import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useEffect } from 'react';
import './App.css'

export default function App(){

  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
  setHistory(prev => {
    const newHistory = [...prev, count];

    // chỉ giữ 5 phần tử gần nhất
    return newHistory.slice(-5);
  });
}, [count]);
return (
  <div className="counter">

    <div style={{ color: "red" }}>
      cefhebfne
    </div>

    <div className="count">{count}</div>

    <div className="buttons">
      <button
        className="add"
        onClick={() => count < 5 && setCount(count + 1)}
      >
        +
      </button>

      <button
        className="sub"
        onClick={() => count > -5 && setCount(count - 1)}
      >
        -
      </button>
    </div>

    <div style={{height: "24px"}}>
      {count === 5? "MAX"
      : count === -5? "MIN"
    : ""}
    </div>


        <div>
  <h3>History (5 gần nhất):</h3>
  <ul>
    {history.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
</div>
  </div>
);
//   return(
//     <>

//       <div style={{color: 'red'}}>
//         cefhebfne
//       </div>

//       {count}

      
//       {/* {
//   (count > 10) ? (
//     <div>MAXIMUM</div>
//   ) : (count < -10) ? (
//     <div>MINIMUM</div>
//   ) : null
// } */}

//       <button className="add" onClick={() =>{ if(count < 5) {setCount(count + 1)}}}> + </button>
//       <button className="sub" onClick={() =>{ if(count > -5) {setCount(count - 1)}}}> - </button>
      
//     {
//         (count === 5)? (
//           <div>
//             MAXIMUM
//           </div>
//         )
//         : (count === -5)? (
//           <div>
//             MINIMUM
//           </div>
//         ): null
//       }
//     </>
//   )
}