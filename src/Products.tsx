import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 gap-x-2 lg:gap-x-4 auto-rows-auto justify-between pb-10">
      <Link to="/single-product">
        <img src="/assets/pexels-photo-6739730.jpeg" alt="" />
        <p className="text-lg font-bold text-black">Nike dri -fit</p>
        <p>description</p>
        <p>price</p>
      </Link>
      <div>
        <img src="/assets/pexels-el-gringo-photo-10371092.jpg" alt="" />
        <p className="text-lg font-bold text-black">Nike dri -fit</p>
        <p>description</p>
        <p>price</p>
      </div>
      <div>
        <img src="/assets/pexels-trarete-8502210.jpg" alt="" />
        <p className="text-lg font-bold text-black">Nike dri -fit</p>
        <p>description</p>
        <p>price</p>
      </div>
    </section>
  );
};

export default Products;
