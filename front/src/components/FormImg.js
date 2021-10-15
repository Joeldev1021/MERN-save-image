import React, { useContext, useEffect, useState } from "react";
import { ImgContext } from "../context/provider/ImgProvider";
import { GlobalUserContext } from "../context/provider/GobalUserProvider";
import { useHistory, useParams } from "react-router";

const FormImg = () => {
  const { id } = useParams();
  const history = useHistory()

  const { uploadImg, images, editeImg } = useContext(ImgContext);
  const { token } = useContext(GlobalUserContext);

  const [selectImg, setselectImg] = useState(null);
  const [infoImg, setInfoImg] = useState({
    title : "",
    description: "",
    imgUrl: "",
  });

  useEffect(() => {
    if (images.length > 0 && id) {
      const img = images.filter((img) => img._id == id);
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
      editeImg(infoImg, token)
    }
    history.push('/images')
  };

  return (
    <div className="row h-100">
      <div className="col-md-6 offset-md-3 my-auto">
        <form className="card card-body" onSubmit={handleSubmit}>
          <div className="row">
            <div className="d-flex justify-content-between align-items-center">
              <h1>upload image</h1>
              <button className="btn btn-primary">submit</button>
            </div>
            <div className="col-md-8">
              <label htmlFor="name">title:</label>
              <input
                type="text"
                id="name"
                className="form-control mb-2"
                name="title"
                value={infoImg.title}
                onChange={handleChange}
                autoFocus
              />
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                rows="2"
                className="form-control"
                value={infoImg.description}
                onChange={handleChange}
              ></textarea>
              {id ? null : (
                <>
                  <label htmlFor="image">Image:</label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="form-control"
                    onChange={handleChangeImg}
                  />
                </>
              )}
            </div>
            <div className="col-md-4 my-auto ">
              {id ? <img className="img-fluid" src={infoImg.imgUrl} /> : null}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormImg;
