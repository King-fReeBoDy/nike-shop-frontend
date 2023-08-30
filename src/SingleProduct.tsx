import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const [user] = useState(false);
  const navigate = useNavigate();
  const handleAddToCart = () => {
    if (!user) {
      return navigate("/login");
    }
    //add to cart
  };

  const handleAddToFavorites = () => {
    if (!user) {
      return navigate("/login");
    }
    //add to favorites
  };
  return (
    <section className="flex justify-center items-center my-12">
      <main className="w-[90%] lg:w-[800px] lg:h-[450px] mx-auto grid lg:grid-cols-2 gap-10 justify-center">
        <div className="flex justify-center items-center overflow-hidden">
          <img
            src="/assets/pexels-photo-6739730.jpeg"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <section className="">
          <h2 className="text-3xl font-bold mb-5">Nike SB Dunk</h2>
          <article className="mb-5 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            accusamus placeat quod sapiente? Ex consequuntur aspernatur, nostrum
            eveniet necessitatibus reprehenderit quibusdam assumenda ipsa
            inventore doloribus repellat, non libero error repellendus.
          </article>
          <div className="flex justify-between items-center">
            <button
              onClick={handleAddToCart}
              className="py-2 px-10 text-white bg-black text-lg"
            >
              Add to cart
            </button>

            <button onClick={handleAddToFavorites}>
              <AiOutlineHeart className="text-2xl" />
            </button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default SingleProduct;
