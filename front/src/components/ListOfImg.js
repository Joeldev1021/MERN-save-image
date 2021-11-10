import { useContext } from "react";
import { FaComment } from "react-icons/fa";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useHistory } from "react-router";
import { ImgContext } from "../context/provider/ImgProvider";
import TimeAgo from "timeago-react";
import vi from "timeago.js/lib/lang/vi";
import { GlobalUserContext } from "../context/provider/GobalUserProvider";

const ListOfImg = () => {
  const { images, allImg, addLike, addComment } = useContext(ImgContext);
  const { user } = useContext(GlobalUserContext);

  const history = useHistory();
  return (
    <div className="row">
      {allImg.length > 0 &&
        allImg.map((image) => {
          return (
            <div
              className="card m-2 p-2 "
              style={{ width: "18rem" }}
              key={image._id}
            >
              <img
                style={{ width: "17rem", height: "15rem", objectFit: "cover" }}
                src={image.imgUrl}
                alt={image.title}
              />
              <h5 className="card-title">{image.title}</h5>
              <p className="card-text">{image.description}</p>

              <div className="d-flex justify-content-between m-2">
                <div className="d-flex flex-column">
                  {image.likes.includes(user._id) ? (
                    <BsHeartFill
                      onClick={() => addLike(image._id, user._id)}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <BsHeart
                      onClick={() => addLike(image._id, user._id)}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                  <span className="ml-2">{image.likes.length} likes</span>
                </div>
                <button type="button" className="btn btn-ligth border" onClick={()=> addComment(image._id)}>
                  <FaComment />
                </button>
              </div>
              <div className="card-footer text-muted d-flex justify-content-between">
                <span>{image.userId.username}</span> {"  "}
                <TimeAgo datetime={image.created_at} locale="vi" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ListOfImg;
