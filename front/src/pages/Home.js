/* eslint-disable no-unused-vars */
import { useContext } from "react";
import HeaderC from "../components/HeaderC";
import ListOfImg from "../components/ListOfImg";
// import ModalComent from "../components/ModalComment";
import { GlobalUserContext } from "../context/provider/GobalUserProvider";

const Home = () => {
  return (
    <div className="container bg-red-600">
<h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
    </div>

  );
};

export default Home;
