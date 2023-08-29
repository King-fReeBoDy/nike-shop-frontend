import { AiOutlineHeart } from "react-icons/ai";
const SingleProduct = () => {
  return (
    <section className="flex justify-center items-center h-[90vh]">
      <main className="w-[90%] lg:w-[800px] lg:h-[450px] mx-auto grid lg:grid-cols-2 gap-10 justify-center">
        <div className="flex justify-center items-center overflow-hidden">
          <img
            src="/public/assets/pexels-photo-6739730.jpeg"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <section className="">
          <h2 className="text-2xl font-bold mb-5">Product name</h2>
          <article className="mb-5 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            accusamus placeat quod sapiente? Ex consequuntur aspernatur, nostrum
            eveniet necessitatibus reprehenderit quibusdam assumenda ipsa
            inventore doloribus repellat, non libero error repellendus.
          </article>
          <div className="flex justify-between items-center">
            <button className="py-2 px-10 text-white bg-black text-lg">
              Add to cart
            </button>

            <button>
              <AiOutlineHeart className="text-2xl" />
            </button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default SingleProduct;
