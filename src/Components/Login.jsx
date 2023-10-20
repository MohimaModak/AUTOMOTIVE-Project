import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { AuthContext } from "./Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    let condition =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;

    if (!condition.test(password)) {
      alert("Password is invalid");
    }

    const emailCondition = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailCondition.test(email)) {
      Swal.fire("Email is invalid");
    }

    signInUser(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        console.log(result.user);
        e.target.reset();
        Swal.fire("User successfully log-in");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered text-black"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className=" p-1 bg-red-700 text-white">Login</button>
              </div>

              <div className="flex justify-center items-center">
                Sign in with{" "}
                <span className="text-2xl cursor-pointer text-red-700">
                  <AiOutlineGoogle></AiOutlineGoogle>
                </span>
              </div>
            </form>
            <div className="text-center font-bold p-2">
              <p>
                Already Have Account Please <br />
                <Link
                  className="underline uppercase text-red-600"
                  to={"/register"}
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
