import { Link, useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { useState } from "react";

export default function UserForm({ isLogin }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (isLogin) {
      //login logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setIsLoading(false);
          toast.success("Login Successful");
          navigate("/dashboard");
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error(error.message);
        });
    } else {
      //registration logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          setIsLoading(false);
          toast.success("Registration Successful");
          navigate("/dashboard");
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error(error.message);

          // ..
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fieldset bg-base-200 border-base-300 rounded-box w-xs border mx-auto p-4"
    >
      <legend className="fieldset-legend">
        {isLogin ? "Login" : "Registration"}
      </legend>

      <label htmlFor="email" className="label">
        Email
      </label>
      <input
        name="email"
        required
        type="email"
        className="input"
        placeholder="Email"
      />

      <label htmlFor="password" className="label">
        Password
      </label>
      <input
        name="password"
        required
        type="password"
        className="input"
        placeholder="Password"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="btn btn-warning mt-4"
      >
        {isLoading ? (
          <>
            <span className="loading loading-spinner"></span>
            loading
          </>
        ) : isLogin ? (
          "Login"
        ) : (
          "Registration"
        )}
      </button>
      <p>
        {isLogin ? (
          <>
            Don't have an account?{" "}
            <Link to="/registration" className="link link-success link-hover">
              Register Here
            </Link>
          </>
        ) : (
          <>
            Already Have an account?{" "}
            <Link to="/login" className="link link-success link-hover">
              Login
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
