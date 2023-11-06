import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoURL, email, password);
    setError("");
    setSuccess("");
    // password validation checking
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Don't have a capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|]/.test(password)) {
      setError("Don't have a special character");
      return;
    }
    console.log(name, photoURL, email, password);
    // create user using email and password
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUser(name, photoURL)
          .then(() => {
            console.log("Profile Updated");
            setSuccess("Successfully Registered");
            Swal.fire({
              title: "Register Successfull",
              text: "You have registered successfully.",
              icon: "success",
              // button: "OK",
            }).then(() => {
              navigate("/");
              setTimeout(() => {
                window.location.reload();
              }, 100);
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
    // create user catch
  };
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mt-10">Please Register</h2>
      <form
        onSubmit={handleRegister}
        className="flex max-w-md flex-col gap-4 mx-auto mt-20"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="photoURL" value="Enter Photo URL" />
          </div>
          <TextInput
            id="photoURL"
            type="text"
            placeholder="Photo URL"
            name="photoURL"
            required
          />
        </div>
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
        <Button type="submit">Register</Button>
      </form>
      <p className="font-bold py-4 text-center">
        Already have an account ? Please{" "}
        <Link to="/login" className="text-[#FF6251]">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
