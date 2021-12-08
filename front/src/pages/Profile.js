import { useContext } from "react";
import { GlobalUserContext } from "../context/provider/GobalUserProvider";

const Profile = () => {
  const { user } = useContext(GlobalUserContext);
  console.log(user);
  return (
    <div>
      {user
        ? (
        <>
        <h4>username: {user.username}</h4>
      <h4>email: {user.email}</h4>
        </>
          )
        : <h4>I need login</h4>}

    </div>
  );
};

export default Profile;
