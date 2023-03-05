import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ContextProvide } from "../ContextProvider";

export default function Navn() {
  const { user, logOut } = useContext(ContextProvide);
  let acc = localStorage.getItem("account");

  return (
    <div
      className="d-flex justify-content-between container-fluid p-2"
      style={{ position: "absolute", zIndex: "10" }}
    >
      <Link to={"/"}>
        {" "}
        <h2 className="font-weight-bold" style={{ color: "red" }}>
          NETFLIX
        </h2>
      </Link>
      <div className="d-flex justify-content-around" style={{ width: "15%" }}>
        {user ? (
          <div
            className="d-flex justify-content-between"
            style={{ width: 180 }}
          >
            <Link to={"/account"}>
              <h1 className="btn btn-outline-danger">Account</h1>
            </Link>
            <Link
              onClick={() => {
                logOut();
              }}
              to={"/"}
            >
              <h1 className="btn btn-danger">Sign out</h1>
            </Link>
          </div>
        ) : (
          <div
            className="d-flex justify-content-between"
            style={{ width: 180 }}
          >
            <Link to={"/login"}>
              <h1 className="btn btn-outline-danger">Sign in</h1>
            </Link>
            <Link to={"/signup"}>
              <h1 className="btn btn-danger">Sign up</h1>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
