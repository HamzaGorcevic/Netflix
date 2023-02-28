import { useContext, useEffect, useState } from "react";
import { ContextProvide } from "../ContextProvider";
import style from "./netflix.module.css";

export default function Movie({ item, account }) {
  let acc = localStorage.getItem("account");
  const [heart, setHeart] = useState(true);
  let ad = JSON.parse(localStorage.getItem("chosen"));
  console.log(ad);
  return (
    <div
      key={item.id}
      className={`${style.rowDiv} m-2 d-flex align-items-center justify-content-center`}
      style={{ position: "relative", width: 280, display: "inline-block" }}
    >
      {acc != null && acc !== "" && acc && acc != "" ? (
        <i
          onClick={() => {
            setHeart(!heart);
            let currentChosen =
              JSON.parse(localStorage.getItem("chosen")) || []; // Retrieve current value of "chosen" or initialize to an empty array if it doesn't exist yet
            let updatedChosen;
            if (heart) {
              updatedChosen = [...currentChosen, item]; // Add new item to array
            } else {
              updatedChosen = currentChosen.filter(
                (el) => el.title !== item.title
              ); // Remove item from array
            }
            localStorage.setItem("chosen", JSON.stringify(updatedChosen)); // Save updated array to "chosen" key in localStorage
          }}
          className={`${style.rowTitle} bi bi-suit-heart${
            heart ? "" : "-fill"
          } text-white`}
          style={{ position: "absolute", top: "2%", left: "2%", fontSize: 22 }}
        ></i>
      ) : (
        ""
      )}
      <h4 className={style.rowTitle}>{item.title}</h4>
      <img
        style={{ width: 280 }}
        className={style.rowImg}
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        alt=""
      />
    </div>
  );
}
