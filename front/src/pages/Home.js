import { useContext } from "react";
import ListOfImg from "../components/ListOfImg";
// import ModalComent from "../components/ModalComment";
import { GlobalUserContext } from "../context/provider/GobalUserProvider";

const Home = () => {
  const { isLogined } = useContext(GlobalUserContext);

  return (
    <>
    <div className="container text-center pt-5 col-md-4">
      <h1>home</h1>
      <p >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas
        eos expedita nisi eius illo autem repellat temporibus. Debitis fuga
        excepturi ipsa repudiandae doloremque modi animi dolore incidunt illum
        quae?
      </p>
    </div>
    {
        isLogined && (
        <ListOfImg />
        )
      }

    </>
  );
};

export default Home;
