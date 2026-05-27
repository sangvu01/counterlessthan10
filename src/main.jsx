import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// body {
//   margin: 0 0;
// }

// .page{
//   display: flex;
//   flex: 1;
//   min-height: 100vh;
//   background-color: rgb(255, 0, 0);
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }

// .card{
//   width: 300px;
//   height: 200px;
//   background-color: white;

//   display: flex;
//   flex-direction: column;
//   gap: 10px;

//   border-radius: 10px;
//   padding: 10px;
// }

// .name{
//   font-size: 20px;
//   display: flex;
//   /* justify-content: flex-end; */
//   padding-right: 20px;
// }

// .job{
//   font-size: 20px;
// }

// .outer-link{
//   display: flex;
//   flex: 1;
//     justify-content: center;
//   align-items: center;
// }

// .link{
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   background-color: black;
//   border-radius: 5px;
//   height: 30px;
//   width: 100px;

//   color: chartreuse;
// }

// .avatar{
//   /* height: 60px; */
//   display: flex;
//   justify-content: center;
// }

// .avatar img{
//   width: 60px;
//   height: 60px;
//   /* display: flex; */
//   /* justify-content: center; */
// }

/* .card{
  width:300px;
  height:200px;

  background:white;

  display:flex;
  flex-direction:column;
  gap:10px;

  padding:20px;

  border-radius:10px;

  box-shadow:0 4px 10px rgba(0,0,0,0.2);
}

.avatar img{
  width:60px;
  height:60px;
}

.name,
.job{
  font-size:20px;
}

.link{
  margin-top:auto;

  display:flex;
  justify-content:center;
  align-items:center;

  padding:10px;

  background:black;
  color:white;

  border-radius:8px;

  text-decoration:none;
} */