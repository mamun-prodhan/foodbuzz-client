import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Button } from "flowbite-react";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  const { logOut, user } = useAuth();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Logout successfully");
        Swal.fire({
          title: "Successfull",
          text: "Logout successfully",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let navLinks = (
    <>
      <li className="md:ml-8 text-xl md:my-0 my-7">
        <NavLink
          to="/"
          className="text-gray-800 hover:text-gray-400 duration-500"
        >
          Home
        </NavLink>
      </li>
      <li className="md:ml-8 text-xl md:my-0 mb-7">
        <NavLink
          to="allblogs"
          className="text-gray-800 hover:text-gray-400 duration-500"
        >
          All Blogs
        </NavLink>
      </li>
      <li className="md:ml-8 text-xl md:my-0 mb-7">
        <NavLink
          to="/addblogs"
          className="text-gray-800 hover:text-gray-400 duration-500"
        >
          Add Blog
        </NavLink>
      </li>
      <li className="md:ml-8 text-xl md:my-0 mb-7">
        <NavLink
          to="/featuredblogs"
          className="text-gray-800 hover:text-gray-400 duration-500"
        >
          Featured Blogs
        </NavLink>
      </li>
      <li className="md:ml-8 text-xl md:my-0 mb-7">
        <NavLink
          to="/wishlist"
          className="text-gray-800 hover:text-gray-400 duration-500"
        >
          Wishlist
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-md w-full">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7  ">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span>Logo</span>
          <span className="ms-5 text-[#FF6251]">FoodBuzz</span>
        </div>
        <ul className="md:flex md:items-center gap-5 hidden">{navLinks}</ul>
        <div className="pb-12 md:pb-0 hidden md:block">
          {!user && (
            <div className="flex items-center gap-5">
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          )}
          {user && (
            <div className="flex gap-5 items-center">
              <div className="flex items-center gap-2">
                <img
                  className="h-8 w-8 rounded-full border-2"
                  src={user.photoURL}
                  alt=""
                />
                <p>
                  {user?.displayName?.length > 6
                    ? user.displayName.slice(0, 6) + "..."
                    : user.displayName}
                </p>
              </div>
              <Button onClick={handleSignOut}>Logout</Button>
            </div>
          )}
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
          className={`z-[1000] md:hidden absolute bg-cyan-100 left-0 w-full pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 opacity-100" : "top-[-490px]"
          } opacity-0`}
        >
          <ul className="md:flex md:items-center gap-5">{navLinks}</ul>
          <div className="pb-12 md:pb-0 flex items-center gap-5">
            {!user && (
              <>
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              </>
            )}
            {user?.email && (
              <>
                <img
                  className="h-8 w-8 rounded-full border-2"
                  src={user.photoURL}
                  alt=""
                />

                <Button onClick={handleSignOut}>Logout</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
