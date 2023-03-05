import { useContext, useEffect, useState } from "react";
import { ContextProvide } from "../ContextProvider";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./netflix.css";
import style from "./netflix.module.css";

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
  function MoveRight() {
    var right = document.querySelector(`.moviesMain`);
    right.scrollLeft = right.scrollLeft + 500;
  }
  function MoveLeft() {
    var right = document.querySelector(`.moviesMain`);
    right.scrollLeft = right.scrollLeft - 500;
  }
  return (
    <div
      className="d-flex  align-items-center justify-content-center flex-column p-5"
      style={{ height: "99vh", background: "rgb(35, 35, 35)" }}
    >
      <div className="accountTitle w-100 ">
        <h1>PLAY LIST</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo alias
          molestias doloribus cupiditate quam molestiae natus explicabo
          obcaecati neque, veritatis ducimus repellat inventore! Inventore ex,
          tempore debitis ad doloremque impedit molestiae, aspernatur nemo
          recusandae sit nulla facilis illo sed quo dolores blanditiis
          consequatur cum labore provident pariatur tempora cupiditate delectus
          alias. Veritatis accusamus repellendus, repudiandae
        </p>
      </div>
      <div
        className="moviesMain"
        style={{
          scrollBehavior: "smooth",
          overflow: "auto",
        }}
      >
        <i
          style={{ display: "block" }}
          onClick={MoveLeft}
          className={`${style.arrowSc} ${style.arrowScLeft} bi bi-arrow-left-circle-fill`}
        ></i>
        {movies.map((el) => {
          return (
            <div className="movieChosen">
              <div className="movieContent">
                <h3>{el.title}</h3>
                <div className="movieIcons">
                  <i className="fa-regular fa-circle-play"></i>
                  <i className="fa-solid fa-heart"></i>
                  <i
                    onClick={() => {
                      deleteShow(el.id);
                    }}
                    className="fa-solid fa-trash"
                  ></i>
                  <i className="fa-sharp fa-solid fa-share-nodes"></i>
                </div>
                <div className="movieLine"></div>
                <div className="movieInfo">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius qui fuga perspiciatis. Doloribus, facere.
                  </p>
                </div>
              </div>
              <img src={`https://image.tmdb.org/t/p/w500/${el?.img}`} alt="" />
            </div>
          );
        })}
        <i
          style={{ display: "block" }}
          onClick={MoveRight}
          className={`${style.arrowSc} ${style.arrowScRight} bi bi-arrow-right-circle-fill`}
        ></i>
      </div>
    </div>
  );
}
