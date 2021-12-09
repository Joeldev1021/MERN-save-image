import { useContext, useState } from "react";
import { ImgContext } from "../context/provider/ImgProvider";
import { useHistory } from "react-router-dom";
import ModalComment from "./ModalComment";

import Cards from "./Cards";

const ListOfImg = () => {
  const { allImg, addComment } = useContext(ImgContext);

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
              <Cards
                key={image._id}
                image={image}
                handlePageSingleImg={handlePageSingleImg}
                handleShowModal={handleShowModal}
              />
            );
          })}
      </div>
    </>
  );
};

export default ListOfImg;
