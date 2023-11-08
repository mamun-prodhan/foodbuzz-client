import { Button, TextInput } from "flowbite-react";
import Swal from "sweetalert2";

const NewsLetter = () => {
  const handleNewsLetter = (e) => {
    e.preventDefault();
    const newsEmail = e.target.email.value;
    if (newsEmail) {
      Swal.fire({
        title: "Subscribed Successfully",
        text: "Thank you for subscribing to our newsletter",
        icon: "success",
      });
      e.target.reset(); // Reset the form
    }
  };
  return (
    <div className="py-10 md:py-20 my-10 md:my-20 bg-teal-100 space-y-5 px-4 md:px-0">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Never Miss A Recipie
      </h2>
      <p className="text-center">
        Sign up for free and be the first to get our best recipes delivered each
        week!
      </p>
      <form onSubmit={handleNewsLetter}>
        <div className="md:max-w-[30%] mx-auto">
          <TextInput
            id="email1"
            name="email"
            type="email"
            placeholder="Your Email For Newsletter"
            required
          />
        </div>
        <div className="text-center mt-5">
          <button
            type="submit"
            className="bg-cyan-700 py-3 px-4 font-bold text-white hover:bg-cyan-600 duration-500"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
