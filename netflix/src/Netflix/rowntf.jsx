import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movie from "./movientf";
import style from "./netflix.module.css";

{
  /*
   */
}

export default function Row({ title, req, idRow }) {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    axios.get(req).then((response) => {
      setmovie(response.data.results);
    });
  }, []);
  function MoveRight(e) {
    var right = document.getElementById(`slider` + idRow);
    right.scrollLeft = right.scrollLeft + 300;
  }
  function MoveLeft() {
    var right = document.getElementById(`slider` + idRow);
    right.scrollLeft = right.scrollLeft - 300;
  }
  return (
    <div className="container-fluid" style={{ height: "auto" }}>
      <h3 className="text-white">{title}</h3>
      <div
        className={`${style.specificRow} d-flex align-items-center`}
        style={{ position: "relative" }}
      >
        <i
          onClick={MoveLeft}
          className={`${style.arrowSc} ${style.arrowScLeft} bi bi-arrow-left-circle-fill`}
        ></i>
        <div
          id={`slider` + idRow}
          style={{
            overflow: "auto",
            scrollBehavior: "smooth",
            position: "relative",
          }}
        >
          <div
            className={`d-flex align-items-center  `}
            style={{ position: "relative" }}
          >
            {movie.map((e) => {
              return <Movie item={e} item2={"asd"} />;
            })}
          </div>
        </div>

        <i
          onClick={MoveRight}
          className={`${style.arrowSc} ${style.arrowScRight} bi bi-arrow-right-circle-fill`}
        ></i>
      </div>
    </div>
  );
}
