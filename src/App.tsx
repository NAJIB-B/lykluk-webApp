

import {Route, Routes} from "react-router-dom"
import './App.css';
import ForgotPassword from "./routes/forgotPassword/forgotPassword";
import Home from './routes/home/home';
import Login from "./routes/login/login";
import Signup from "./routes/signup/signup";

function App() {
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
