import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SignInNetflix from "./Netflix/signupnft";
import ShowHome from "./Netflix/showhome";
import Accout from "./Netflix/accountnetflix";
import Provide from "./ContextProvider";
import LayoutN from "./Netflix/layoutnft";
import SignUpN from "./Netflix/createacc";
import Home from "./Netflix/netflixhome";

function App() {
  return (
    <Provide>
      <LayoutN>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Accout />} />
          <Route path="/login" element={<SignInNetflix />} />
          <Route path="/signup" element={<SignUpN />} />
        </Routes>
      </LayoutN>
    </Provide>
  );
}

export default App;
