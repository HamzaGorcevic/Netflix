import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ContextProvide } from "../ContextProvider";
export default function SignUpN() {
  const { signUp } = useContext(ContextProvide);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };
  const navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          'url("https://www.logitheque.com/en/wp-content/uploads/sites/6/2019/07/netflix-image.jpg")',
        height: "99vh",
      }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          borderRadius: 15,
          background: "rgba(0, 0, 0, 0.715)",
          width: 450,
          height: 600,
        }}
      >
        <h1 className="text-white">Sign up</h1>
        <div className="d-flex flex-column w-75 mt-2">
          <p className="text-secondary mb-0">Email or phone number</p>
          <input
            onChange={(name) => {
              setEmail(name.target.value);
            }}
            placeholder="Email"
            className="text-white w-100"
            style={{
              background: "rgba(100,100,100,0.7)",
              height: 50,
              borderRadius: 10,
            }}
            type="text"
          />
        </div>
        <div className="d-flex flex-column w-75 mt-2">
          <p className="text-secondary mb-0">password</p>
          <input
            onChange={(pass) => {
              setPassword(pass.target.value);
            }}
            placeholder="Password"
            className="text-white w-100 "
            style={{
              background: "rgba(100,100,100,0.7)",
              height: 50,
              borderRadius: 10,
            }}
            type="password"
          />
        </div>
        <button onClick={HandleSubmit} className="btn btn-danger w-75 mt-5">
          Sign up
        </button>

        <div className=" mt-3 w-75 d-flex text-secondary justify-content-between">
          <div className="d-flex w-50 align-items-center">
            <input
              className="mr-2"
              style={{ width: 15, height: 15 }}
              type="checkbox"
            />
            <p className="m-0">remember me</p>
          </div>
          <p className="m-0">need help?</p>
        </div>

        <div className="w-75 text-secondary mt-5">
          <p>
            Already registred ?{" "}
            <span>
              <Link to={"/login"}>Sign in</Link>
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}
