import book1 from "../../../assets/book1.png";
import book2 from "../../../assets/book2.png";
import book3 from "../../../assets/book3.png";
import hero from "../../../assets/food.jpg";
const RecipieBooks = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 md:mt-20">
      <div className="space-y-5">
        <h2 className="text-2xl md:text-4xl text-center font-bold">
          Check out our newest <br />
          recipes books
        </h2>
        <p className="text-center">
          Those are the most popular recipie books in the market now. <br />{" "}
          Collect now and learn more and more modern recipies.
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <img src={book1} alt="" />
          <img src={book2} alt="" />
          <img src={book3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RecipieBooks;
