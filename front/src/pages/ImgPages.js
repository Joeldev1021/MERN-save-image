import { useContext } from "react";
import { ImgContext } from "../context/provider/ImgProvider";
import {FaTrashAlt,FaPen,FaComment  } from "react-icons/fa";

const ImgPages = () => {
  const { images } = useContext(ImgContext);

  return (
    <div className="row">
      {images.length > 0 &&
        images.map((image) => {
          return (
            <div className="card m-2 " style={{ width: "18rem" }}>
              <img src={image.imgUrl} alt={image.title} />
              <h5 class="card-title">{image.title}</h5>
               <p class="card-text">{image.description}</p> 
              <div className="d-flex justify-content-around">
                <button type="button" class="btn btn-info">
                  <FaPen/>
                </button>
                <button type="button" class="btn btn-danger">
                <FaTrashAlt/>
                </button>
                <button type="button" class="btn btn-ligth border">
                  <FaComment/>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ImgPages;
