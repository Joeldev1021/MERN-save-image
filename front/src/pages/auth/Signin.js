import { useContext, useState } from "react";
import { GlobalUserContext } from "../../context/provider/GobalUserProvider";

const Signin = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const { signInUser, errorMessage } = useContext(GlobalUserContext);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInUser(user);
  };

  return (
    <div className="d-flex justify-content-center ">
      <div className="row justify-content-md-center col-md-4">
        <h1>Signin</h1>
        {errorMessage && (
          <div
            className="alert alert-danger text-center rounded-0"
            role="alert"
          >
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              username
            </label>
            <input
              value={user.username}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="username"
              name="username"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              value={user.password}
              onChange={handleChange}
              type="password"
              name="password"
              className="form-control"
              id="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
