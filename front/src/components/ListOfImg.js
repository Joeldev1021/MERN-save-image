import { useContext } from "react";
import { FaComment } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { useHistory } from "react-router";
import { ImgContext } from "../context/provider/ImgProvider";
import TimeAgo from 'timeago-react'; 
import vi from 'timeago.js/lib/lang/vi';
import { LikesContext } from "../context/provider/LikesProvider";

const ListOfImg = () => {
  const { images, allImg } = useContext(ImgContext);
  const { addLike } = useContext(LikesContext);

  const history = useHistory();
  console.log(allImg);

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
              <img style={{ width:"17rem", height: "15rem", objectFit:"cover"}} src={image.imgUrl} alt={image.title} />
              <h5 className="card-title">{image.title}</h5>
              <p className="card-text">{image.description}</p>
              <div className="card-footer text-muted d-flex justify-content-between">
                <span>{image.userId.username}</span>  {"  "}
                <TimeAgo datetime={image.created_at} locale='vi' />
              </div>
              <div className="d-flex justify-content-around"> 
                <div >
                   <BsHeart onClick={()=> addLike(image._id)} style={{cursor: 'pointer'}}/>
                  {/* BsHeartFill */}
                </div>
          
                <button type="button" className="btn btn-ligth border">
                  <FaComment />
                </button>
              </div>
              
            </div>
          );
        })}
    </div>
  );
};

export default ListOfImg;
