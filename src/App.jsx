import { useState } from "react";
import { useEffect } from "react";
import "./App.css";


export default function App(){
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  // useEffect(() => {
  //   setHistory(prev => {
  //     let newlist = [...prev, count];
  //     return newlist.slice(-5);
  //   })
  // }, [count]);
  useEffect(() => {
  setHistory(prev => {
    const newHistory = [...prev, count];

    // chỉ giữ 5 phần tử gần nhất
    return newHistory.slice(-5);
  });
}, [count]);







  return(
    <>
    <div className="page">
    <div className="count">
      {count}
    </div>
    <div style={{
      gap: "20px",
      display: "flex"
    }}>
    <button onClick={() => (count < 10) && setCount(count + 1)}> + </button>
    <button onClick={() => (count > -10) && setCount(count - 1)}> - </button>
    </div>
    <div style={{
      height: "24px",
    }}>{(count === 10)? "MAX" :
          (count === -10)? "MIN": " "}</div>

    <div style={{
      width: "100px",
      borderBottom: "10px solid black",
      borderTop: "10px solid red",
      borderLeft: "10px solid blue",
      borderRight: "10px solid purple"
    }}>
      HISTORY: </div>
    <ul className="history">
      {history.map((item,index) => (
        <li key={index}> {item}</li>
      ))}
    </ul>
    </div>
    </>
  )
}