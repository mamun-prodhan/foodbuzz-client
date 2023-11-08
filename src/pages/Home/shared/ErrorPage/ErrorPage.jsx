import { Link } from "react-router-dom";
import errorImg from "../../../../assets/404.gif";

const ErrorPage = () => {
  return (
    <div>
      <div className="mt-20">
        <img className="mx-auto" src={errorImg} alt="" />
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-center my-6">
        Page Not Found
      </h2>
      <div className="text-center">
        <Link to="/">
          <button className=" text-base md:text-xl font-bold px-4 md:px-7 py-3 md:py-4 duration-200 bg-[#85cc34] hover:bg-[#96ff1e] rounded-lg">
            Go Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
