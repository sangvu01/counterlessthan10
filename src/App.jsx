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
    <div className="All">
    <div className="counttext">
      COUNT: {count}
    </div>
    <div className="AllButtons">
    <button onClick={() => (count < 10) && setCount(count + 1)} style={{
      backgroundColor: "#26f901",
      color: "red",
    }}>
       + 
    </button>
    <button onClick={() => (count > -10) && setCount(count - 1)} style={{
      backgroundColor: "red",
      color: "#26f901"
    }}> - </button>
    </div>
    <div className="MinMax">{(count === 10)? "MAX" :
          (count === -10)? "MIN": " "}</div>

    <div className="history">
      HISTORY: </div>
    <ul>
      {history.map((item,index) => (
        <li key={index}> {item}</li>
      ))}
    </ul>
    </div>


      {/* CSS PLAYGROUND */}
      <div className="css-playground">
        <div className="box" onClick={() => {console.log("A")}}>A</div>
        <div className="box">B</div>
        <div className="box">C</div>
      </div>


    </>
  )
}