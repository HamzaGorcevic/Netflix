import { useContext, useEffect, useState } from "react";
import { ContextProvide } from "../ContextProvider";
import style from "./netflix.module.css";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export default function Movie({ item }) {
  const { user } = useContext(ContextProvide);
  const [heart, setHeart] = useState(true);

  const MovieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setHeart(!heart);
      await updateDoc(MovieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    }
  };

  return (
    <div
      key={item.id}
      className={`${style.rowDiv} m-2 d-flex align-items-center justify-content-center`}
      style={{ position: "relative", width: 280, display: "inline-block" }}
    >
      {user?.email ? (
        <i
          onClick={saveShow}
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
