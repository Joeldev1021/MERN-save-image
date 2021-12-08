import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ImgContext } from "../context/provider/ImgProvider";

const ProfileImg = () => {
  const { getImgById, img } = useContext(ImgContext);
  const { id } = useParams();
  useEffect(() => {
    getImgById(id);
  }, [id]);
  console.log(img);
  return (
    <>
      <p>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button with data-bs-target
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
    </>
  );
};

export default ProfileImg;
