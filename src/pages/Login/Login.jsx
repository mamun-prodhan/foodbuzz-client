import { Button, Label, Navbar, TextInput } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const { signIn, googleSignIn } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    setError("");
    setSuccess("");
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("successfully logged In");
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          title: "Successfull",
          text: "You have successfully logged In",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    setSuccess("");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Successfully logged in");
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          title: "Successfull",
          text: "You have successfully logged In",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mt-10">Please Login</h2>
      <form
        onSubmit={handleLogin}
        className="flex max-w-md flex-col gap-4 mx-auto mt-20"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="******"
            name="password"
            required
          />
        </div>
        {error && <p className="text-red-400 font-bold my-4">{error}</p>}
        {success && <p className="text-green-400 font-bold my-4">{success}</p>}
        <Button type="submit">Login</Button>
      </form>

      <div className="max-w-md mx-auto mt-3">
        <Button onClick={handleGoogleSignIn} className="w-full" type="submit">
          Google Sign In
        </Button>
      </div>
      <p className="font-bold py-4 text-center">
        New to this Website ? Please{" "}
        <Link to="/register" className="text-[#FF6251]">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
