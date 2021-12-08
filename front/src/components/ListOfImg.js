import { useContext, useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { ImgContext } from "../context/provider/ImgProvider";
import { useHistory } from "react-router-dom";

import { GlobalUserContext } from "../context/provider/GobalUserProvider";
import ModalComment from "./ModalComment";
import FooterCard from "./FooterCard";

const ListOfImg = () => {
  const { allImg, addLike, addComment } = useContext(ImgContext);
  const { user } = useContext(GlobalUserContext);
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [selecImg, setSelecImg] = useState(null);

  const handleShowModal = (image) => {
    setSelecImg(image);
    setShowModal(!showModal);
  };

  const handlePageSingleImg = (id) => {
    history.push("/img/profile/" + id);
  };

  console.log(allImg);

  return (
    <>
      {showModal && (
        <ModalComment
          handleShowModal={handleShowModal}
          image={selecImg}
          addComment={addComment}
        />
      )}

      <div className="row justify-content-center">
        {allImg.length > 0 &&
          allImg.map((image) => {
            return (
              <div
                className="card m-2 p-2 "
                style={{ width: "18rem" }}
                key={image._id}
              >
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
                    }}>
                      {image.likes.includes(user._id)
                        ? (
                        <BsHeartFill />
                          )
                        : (
                        <BsHeart />
                          )}
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
                <FooterCard image={image}/>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ListOfImg;
