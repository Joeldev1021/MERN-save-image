import React, { useContext, useEffect, useState } from "react";
import { ImgContext } from "../context/provider/ImgProvider";
import { GlobalUserContext } from "../context/provider/GobalUserProvider";
import { useHistory, useParams } from "react-router";
import UploadForm from "./UploadForm";

const FormImg = () => {
  const { id } = useParams();
  const history = useHistory();

  const { uploadImg, images, editeImg } = useContext(ImgContext);
  const { token } = useContext(GlobalUserContext);

  const [selectImg, setselectImg] = useState(null);
  const [infoImg, setInfoImg] = useState({
    title: "",
    description: "",
    imgUrl: ""
  });

  useEffect(() => {
    if (images.length > 0 && id) {
      const img = images.filter((img) => img._id === id);
      setInfoImg(img[0]);
    }
  }, [images]);

  const handleChange = (e) => {
    setInfoImg({ ...infoImg, [e.target.name]: e.target.value });
  };

  const handleChangeImg = (e) => {
    setselectImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      const formData = new FormData();
      formData.append("title", infoImg.title);
      formData.append("description", infoImg.description);
      formData.append("image", selectImg);
      uploadImg(formData, token);
    } else {
      editeImg(infoImg, token);
    }
    history.push("/images");
  };

  return (
    <div className="row h-100">
      <div className="col-md-6 offset-md-3 my-auto">
        <UploadForm
          id={id}
          infoImg={infoImg}
          handleChange={handleChange}
          handleChangeImg={handleChangeImg}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default FormImg;
