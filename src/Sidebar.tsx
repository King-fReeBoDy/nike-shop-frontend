import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <aside>
      <div>
        <div className="flex justify-between items-center mb-2">
          <p className="font-bold text-lg">Gender</p>
          <p>
            <IoIosArrowDown />
          </p>
        </div>

        <section className="space-y-1">
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p className="ml-3">Men</p>
          </div>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p className="ml-3">Women</p>
          </div>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p className="ml-3">Unisex</p>
          </div>
          {showMore && (
            <div className="flex">
              <input type="checkbox" name="" id="" />
              <p className="ml-3">Kids</p>
            </div>
          )}

          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Less -" : "More +"}
          </button>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
