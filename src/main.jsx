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
//   margin: 0;
//   font-family: Arial, sans-serif;
// }

// .card {
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   /* justify-content: center; */
//   gap: 12px;

//   border-radius: 16px;
//   width: 350px;
//   height: 250px;

//   box-shadow: 0 4px 12px rgba(0,0,0,0.2);

//   transition: 0.3s;
// }

// .card:hover {
//   transform: translateY(-5px);
// }

// .img {
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
// }

// .name {
//   font-size: 24px;
//   font-weight: bold;
//   text-align: right;
// }

// .job {
//   color: gray;
//   font-size: 18px;
// }

// .GPTlink {
//   text-decoration: none;
//   /* background-color: #007bff; */
//   color: #373e03;
//   font-weight: 800;
//   /* padding: 10px 20px;
//   border-radius: 8px; */

//   transition: 0.3s;
// }

// .GPTlink:hover {
//   background-color: #0056b3;
// }


// .remain{
//   display: flex;
//   gap: 30px
// }

// /* body {
//   margin: 0;
// }





// .card{
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 20px;
//   border-radius: 10px;
//   width: 350px;
//   height: 200px;
// }

// .img{

// }

// .name{

// }

// .job{

// }

// .GPTlink{

// }
//  */
