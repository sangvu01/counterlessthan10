// import { useState } from "react";
// import { useEffect } from "react";
import img from './assets/react.svg'
import "./App.css";

export default function App() {

  // const[message, setMessage] = useState("");



  return (
    <div style={{
      display: "flex",
      flex: 1,
      backgroundColor: "black",
      minHeight: "100vh",
      padding: 0,
      justifyContent: "center",
      alignItems: "center"
    }}>
        {/* CSS PLAYGROUND */}
      <div className="css-playground">
        {/* <div className="card">
          <img src={img} className='img'/>
          <div className='right'><div className='name'>Nguyen Van A</div>
          <div className='remain'>
          <div className='job'> FE Dev</div>
          <a href='https://chatgpt.com/' className='GPTlink'>GPT</a>
          </div></div>
        </div> */}
        <div className="card">
  <img src={img} className="img" />

  <div className="name">Nguyen Van A</div>

  <div className="bottom">
    <div className="job">FE Dev</div>
    <a className="GPTlink">GPT</a>
  </div>
</div>
      </div>

    </div>
  );
}
