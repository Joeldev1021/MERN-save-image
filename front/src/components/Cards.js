import { useContext } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { GlobalUserContext } from "../context/provider/GobalUserProvider";
import { ImgContext } from "../context/provider/ImgProvider";
import FooterCard from "./FooterCard";

const Cards = ({ image, handlePageSingleImg, handleShowModal }) => {
  const { addLike } = useContext(ImgContext);
  const { user } = useContext(GlobalUserContext);

  return (
    <div className="card m-2 p-2 " style={{ width: "18rem" }} key={image._id}>
      <img
        className="cursor-pointer"
        onClick={() => handlePageSingleImg(image._id)}
        style={{
          width: "17rem",
          height: "15rem",
          objectFit: "cover",
          cursor: "pointer"
        }}
        src={image.imgUrl}
        alt={image.title}
      />
      <h5 className="card-title">{image.title}</h5>
      <p className="card-text">{image.description}</p>

      <div className="d-flex justify-content-between m-2">
        <div className="d-flex flex-row align-items-center">
          <button
            type="button"
            onClick={() => addLike(image._id, user._id)}
            style={{
              border: "none",
              outline: "none",
              background: "none"
            }}
          >
            {image.likes.includes(user._id) ? <BsHeartFill /> : <BsHeart />}
          </button>

          <span className="m-1">{image.likes.length}</span>
        </div>
        <div className="d-flex flex-row align-items-center">
          <button
            type="button"
            style={{
              border: "none",
              outline: "none",
              background: "none"
            }}
            onClick={() => handleShowModal(image)}
          >
            <FaRegComment />
          </button>
          <span className="m-1">{image.comments.length}</span>
        </div>
      </div>
      <FooterCard image={image} />
    </div>
  );
};

export default Cards;
