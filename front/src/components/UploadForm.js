const UploadForm = ({ handleChange, handleSubmit, infoImg, id, handleChangeImg }) => {
  return (
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
              {id
                ? null
                : (
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
  );
};

export default UploadForm;
