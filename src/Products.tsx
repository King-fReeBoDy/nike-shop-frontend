const Products = () => {
  return (
    <section className="grid grid-cols-3 gap-x-4 auto-rows-auto justify-between pb-10">
      <div className={"w-full"}>
        <img src="/assets/pexels-photo-6739730.jpeg" alt="" />
        <p className="text-lg font-bold text-black">Nike dri -fit</p>
        <p>description</p>
        <p>price</p>
      </div>
      <div className="w-full">
        <img src="/assets/pexels-el-gringo-photo-10371092.jpg" alt="" />
        <p className="text-lg font-bold text-black">Nike dri -fit</p>
        <p>description</p>
        <p>price</p>
      </div>
      <div className="w-full">
        <img src="/assets/pexels-trarete-8502210.jpg" alt="" />
        <p className="text-lg font-bold text-black">Nike dri -fit</p>
        <p>description</p>
        <p>price</p>
      </div>
    </section>
  );
};

export default Products;
