import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmitSignup = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    
    await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  // ab login form ki funtinality add karege taki jo error thi woh solve ho jo signup ko hit kar raha tha 
  const {
    register: loginRegister, 
    handleSubmit: loginHandleSubmit,
    formState: {errors: loginErrors},
  } = useForm();
    const onSubmitLogin = async (data) =>{
      const loginInfo ={
        email: data.email,
        password: data.password
      };
      await axios.post("http://localhost:4001/user/login",loginInfo)
      .then((res) => {
        if(res.data){
          toast.success("Logged in Successfully");
          localStorage.setItem("Users",JSON.stringify(res.data.user));
          navigate(from, { replace: true});
          window.location.reload();
        }
      })
      .catch((err) => {
        if(err.response){
          toast.error("Error: " + err.response.data.message);
        }
      })
    }

  return (
    <div className="flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white">
      <div className="w-[600px]">
        <div className="modal-box dark:bg-slate-800">
          <form onSubmit={handleSubmit(onSubmitSignup)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span> <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-700 dark:text-white"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span> <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-700 dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span> <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-700 dark:text-white"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* Signup Button */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("login_modal").showModal()
                    }
                  >
                    Login
                  </button>
                </p>
            </div>
          </form>
        </div>
      </div>
      {/* Login Modal  */}
      <dialog id="login_modal" className="modal">
        <div method="dialog" className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("login_modal").close()}
          >
            ✕
          </button>
          {/* Login Form */}
          <form onSubmit={loginHandleSubmit(onSubmitLogin)} className="space-y-4">
            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-700 dark:text-white"
                {...loginRegister("email", { required: true })}
              />
              {loginErrors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Password */}
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-700 dark:text-white"
                {...loginRegister("password", { required: true })}
              />
              {loginErrors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Signup;
