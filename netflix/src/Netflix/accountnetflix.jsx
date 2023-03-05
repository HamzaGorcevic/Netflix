import { useContext, useEffect, useState } from "react";
import { ContextProvide } from "../ContextProvider";
import { Navigate } from "react-router-dom";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Accout() {
  const { user } = useContext(ContextProvide);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);
  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      console.log("Deee");
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="d-flex bg-dark align-items-center justify-content-center flex-wrap"
      style={{ height: "99vh", background: "white" }}
    >
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "6%",
          color: "white",
        }}
      >
        <h2 className="text-danger">Welcome {user.email}</h2>
      </div>
      {movies.map((el) => {
        {
        }
        return (
          <div
            style={{
              width: 500,
              height: 500,
            }}
          >
            <h3>{el.title}</h3>
            <h3
              onClick={() => {
                deleteShow(el.id);
              }}
            >
              Remove
            </h3>
            <img src={`https://image.tmdb.org/t/p/w500/${el?.img}`} alt="" />
          </div>
        );
      })}
    </div>
  );
}
