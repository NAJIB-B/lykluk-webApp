

import { useEffect } from "react";
import {Route, Routes} from "react-router-dom"
import './App.css';
import ForgotPassword from "./routes/forgotPassword/forgotPassword";
import Home from './routes/home/home';
import Login from "./routes/login/login";
import Signup from "./routes/signup/signup";

// type RequestOptionsTypes ={
//   method: string;
//   body:
// }

function App() {

  useEffect(()=>{
//
    
   
  }
  ,[])


// const data = {
//   email:"user2@gmail.com",
//   password: "password",
//   name: "najib bala",
//   dob: "2021-05-05",
//   terms: "1"
// }

// let requestOptions = {
//   method: 'POST',
//   body: urlencoded,
//   redirect: 'follow'
// };
const doit =async()=>{
  const data = {
    email:"user2@gmail.com",
    password: "password",
    name: "najib bala",
    dob: "2021-05-05",
    terms: "1"
  }
  try {
    
    const response = fetch("https://api.lykluk.com:8080/auth/signup", {
            method: "POST",
          
              body:JSON.stringify({data}),
            
            headers: {
              "Content-Type": "application/json"
            },
            redirect: "follow"
           })
    
    
      console.log(response)
  } catch (error) {
    console.log(error)
  }
}
  
  return (
    <Routes>
      <Route path="/" element={ <Home></Home>}>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword></ForgotPassword>}></Route>
      </Route>
    </Routes>
   
  );
}

export default App;
