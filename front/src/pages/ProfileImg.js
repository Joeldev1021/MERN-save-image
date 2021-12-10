/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { useParams } from "react-router";
import { apiAddLikes } from "../api/likeApi";
import Comment from "../components/Comment";
import { GlobalUserContext } from "../context/provider/GobalUserProvider";
import { ImgContext } from "../context/provider/ImgProvider";

const ProfileImg = () => {
  const { getCommentImgById, commentByImg, allImg } = useContext(ImgContext);
  const { user } = useContext(GlobalUserContext);
  const { id } = useParams();
  const [img, setImg] = useState({});

  useEffect(() => {
    getCommentImgById(id);
  }, []);

  useEffect(() => {
    setImg(allImg.filter((img) => img._id === id)[0]);
  }, [id]);

  if (!commentByImg) return <h1>Cargando..</h1>;

  return (

    <div className="row justify-content-center">
      <div className="card " style={{ width: "30rem" }}>
        <img src={img.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{img.title}</p>
        </div>
        <div className="d-flex justify-content-between m-2">
          <div className="d-flex flex-row align-items-center">
            <button
              type="button"
              onClick={() => apiAddLikes(img._id, user._id)}
              style={{
                border: "none",
                outline: "none",
                background: "none"
              }}
            >
              {img.likes.includes(user._id) ? <BsHeartFill /> : <BsHeart />}
            </button>
            <span className="m-1">hola</span>
          </div>
          <div className="d-flex flex-row align-items-center">
            <button
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{
                border: "none",
                outline: "none",
                background: "none"
              }}
            >
              <FaRegComment />
            </button>
            {img && img.comments.length > 0 && (
              <span className="m-1">{img.comments.length}</span>
            )}
          </div>
        </div>
        <div className="collapse" id="collapseExample">
          <hr />
          <form>
            <div className="form-group row ">
              <div style={{ width: "95%", margin: "auto" }}>
                <textarea
                  style={{
                    resize: "none",
                    outline: "none",
                    border: "none",
                    width: "100%",
                    height: "70px"
                  }}
                  name="comment"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className={"btn btn-primary"}>
                Comment
              </button>
            </div>
          </form>
        </div>
        {
          commentByImg.map((comment, index) => <Comment key={comment._id} comment={comment} />)
        }

    </div>
  </div>
  );
};

export default ProfileImg;
