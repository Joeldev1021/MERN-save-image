import { useContext } from "react";
import { ImgContext } from "../context/provider/ImgProvider";
import {FaTrashAlt,FaPen,FaComment  } from "react-icons/fa";
import { useHistory } from "react-router";

const ImgPages = () => {
  const { images,deleteImg } = useContext(ImgContext);

  const history = useHistory()

  const handleEditeId= (id) => {
    history.push(`/img/edite/${id}`)
  }

  return (
    <div className="row">
      {images.length > 0 &&
        images.map((image) => {
          return (
            <div className="card m-2 p-2 " style={{ width: "18rem" }} key={image._id}>
              <img src={image.imgUrl} alt={image.title} />
              <h5 className="card-title">{image.title}</h5>
               <p className="card-text">{image.description}</p> 
              <div className="d-flex justify-content-around">
                <button type="button" className="btn btn-info" onClick={()=> handleEditeId(image._id)} >
                  <FaPen/>
                </button>
                <button type="button" className="btn btn-danger" onClick={()=> deleteImg(image._id)}>
                <FaTrashAlt/>
                </button>
                <button type="button" className="btn btn-ligth border">
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
