import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  let navLinks = (
    <>
      <li className="md:ml-8 text-xl md:my-0 my-7">
        <NavLink className="text-gray-800 hover:text-gray-400 duration-500">
          Home
        </NavLink>
      </li>
      <li className="md:ml-8 text-xl md:my-0 mb-7">
        <NavLink className="text-gray-800 hover:text-gray-400 duration-500">
          Services
        </NavLink>
      </li>
      <li className="md:ml-8 text-xl md:my-0 mb-7">
        <NavLink className="text-gray-800 hover:text-gray-400 duration-500">
          About
        </NavLink>
      </li>
      <li className="md:ml-8 text-xl md:my-0 mb-7">
        <NavLink className="text-gray-800 hover:text-gray-400 duration-500">
          Blogs
        </NavLink>
      </li>
      <li className="md:ml-8 text-xl md:my-0 mb-7">
        <NavLink className="text-gray-800 hover:text-gray-400 duration-500">
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-md w-full">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7  ">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span>Logo</span>
          Traveller
        </div>
        <ul className="md:flex md:items-center gap-5 hidden">{navLinks}</ul>
        <div className="pb-12 md:pb-0 hidden md:block">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
          <Button>Logout</Button>
        </div>
        {/* for mobile responsive */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <AiOutlineMenu></AiOutlineMenu>
          )}
        </div>
        <div
          className={`md:hidden absolute bg-blue-600 left-0 w-full pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 opacity-100" : "top-[-490px]"
          } opacity-0`}
        >
          <ul className="md:flex md:items-center gap-5">{navLinks}</ul>
          <div className="pb-12 md:pb-0 flex gap-5">
            <Button>Login</Button>
            <Button>Register</Button>
            {/* <Button>Logout</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
