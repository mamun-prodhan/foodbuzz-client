const NewRecipie = () => {
  return (
    <div className="mt-10 md:mt-20 max-w-7xl mx-auto p-4 md:p-0">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        New Recipes Every Wednesday
      </h2>
      <div className="mx-auto md:w-[60%]">
        <p className="text-center my-5 md:my-10">
          Discover the exquisite blend of flavors in our signature recipe.
          Carefully seasoned meats, tender vegetables, and aromatic spices come
          together to create a dish that tantalizes your palate.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[415px] md:h-[315px]">
        <div>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/GSjhVMJtbgo?si=yijlYMMGcQy9tYHu"
            title="YouTube Video 1"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/CBykDMlw6go?si=HjtgdbX6iKnnwrE6"
            title="YouTube Video 2"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default NewRecipie;
