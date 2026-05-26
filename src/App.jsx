import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

export default function App() {
  const final = 3;
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  // useEffect(() => {
  //   setHistory(prev => {
  //     let newlist = [...prev, count];
  //     return newlist.slice(-5);
  //   })
  // }, [count]);
  useEffect(() => {
    setHistory((prev) => {
      const newHistory = [...prev, count];

      // chỉ giữ 5 phần tử gần nhất
      return newHistory.slice(-5);
    });
  }, [count]);
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: "red",
        minHeight: "100vh",
        padding: 0,
      }}
    >
      <div style={{ display: "flex", flex: 1, backgroundColor: "red" }}>
        <div
          style={{
            backgroundColor: "blue",
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <div className="All">
            <div className="Left">
              <div className="Counter">COUNT: {count}</div>
              <div className="buttons">
                {/* <button onClick={() => count < final && setCount(prev => prev + 1)}> + </button>
            <button onClick={() => count > -final && setCount(prev => prev - 1)}> - </button> */}
                <button
                  onClick={() => setCount((prev) => Math.min(prev + 1, final))}
                  style={{
                    backgroundColor: "#38fb03",
                  }}
                >
                  {" "}
                  +{" "}
                </button>
                <button
                  onClick={() => setCount((prev) => Math.max(prev - 1, -final))}
                  style={{
                    backgroundColor: "#fb0303",
                  }}
                >
                  {" "}
                  -{" "}
                </button>
              </div>
              <div className="alert">
                {count === final ? "MAX" : count === -final ? "MIN" : ""}
              </div>
            </div>

            <div className="right">
              <div className="historyTitle">HISTORY:</div>
              <ul>
                {history.map((value, key) => (
                  <li key={key}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="AB"
            style={{
              display: "flex",
              flex: 1,justifyContent: "center",
                alignItems: "center"
              
            }}
          >
            <div style={{
              backgroundColor:
                count === 3
                  ? "#38fb03"
                  : count === 2
                    ? "yellow"
                    : count === 1
                      ? "red"
                      : "black",
                
            }} className="A"></div>
          </div>
        </div>

        {/* CSS PLAYGROUND
      <div className="css-playground">
        <div className="box" onClick={() => {console.log("A")}}>A</div>
        <div className="box">B</div>
        <div className="box">C</div>
      </div> */}
      </div>
    </div>
  );
}
