// import { useState } from "react";
// import { useEffect } from "react";
import avatar from './assets/react.svg'
import "./App.css";

export default function App() {

  // const[message, setMessage] = useState("");



  return (
    <div className='page'>
      <div className='card'>
        <div className='avatar'>
          <img src={avatar}/>
        </div>
        {/* <div className='name'>
          Name: Chatgpt
        </div>
        <div className='job'>
          Job: FE dev
        </div> */}
        <div className='row'>
          <div className='label'>Name: </div>
          <div className='value'>ChatGpt</div>
        </div>

        <div className='row'>
          <div className='label'>Job: </div>
          <div className='value'>FE Dev</div>
        </div>
        <div className='outer-link'>
        <a href='https://chatgpt.com/' className='link'>
          Follow GPT
        </a>
        </div>
      </div>

    </div>
  );
}
