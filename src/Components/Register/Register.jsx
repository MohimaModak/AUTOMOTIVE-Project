import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { creatUser, signInWithGoogle } = useContext(AuthContext);
  console.log(creatUser);
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const picture = e.target.picture.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password, picture);

    let condition =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;

    if (!condition.test(password)) {
      alert("Password is invalid");
      return;
    }

    creatUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: picture,
        }).then(() => {
          e.target.reset();
          window.location.href = "/";
          return Swal.fire("User Created Successfully");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
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
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo"
                  className="input input-bordered"
                  required
                  name="picture"
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
                <button className=" p-1 bg-red-700 text-white">Register</button>
              </div>

              <div className="flex justify-center items-center">
                Sign in with{" "}
                <span
                  onClick={handleGoogle}
                  className="text-2xl cursor-pointer text-red-700"
                >
                  <AiOutlineGoogle></AiOutlineGoogle>
                </span>
              </div>
            </form>
            <div className="text-center font-bold p-2">
              <p>
                Already Have Account Please <br />
                <Link
                  className="underline uppercase text-red-600"
                  to={"/login"}
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-red-700">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat <br /> ut
              assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
