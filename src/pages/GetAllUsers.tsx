const GetAllUsers = () => {
  return (
    <section className="">
      <h2 className="text-2xl font-bold sticky top-0 left-0 bg-white pt-10 mb-5">
        Users
      </h2>

      <div className=" overflow-x-auto">
        <div className="flex items-center justify-between pb-4 bg-white">
          <div className="flex justify-between items-center w-full">
            <input
              type="text"
              className="p-2 text-sm border rounded-lg w-80"
              placeholder="Search users"
            />
            <button className="bg-black py-1.5 px-4 rounded-lg text-white">
              Create a new user
            </button>
          </div>
        </div>
        <table className="w-full text-sm">
          <thead className="text-xs uppercase bg-slate-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                image
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <th
                scope="row"
                className="flex justify-center items-center px-6 py-4 whitespace-nowrap"
              >
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="/public/assets/pexels-photo-6739730.jpeg"
                  alt=""
                />
              </th>
              <td className="px-6 py-4 text-center">desmondkudjuh@gmail.com</td>
              <td className="px-6 py-4 text-center">Admin</td>
              <td className="px-6 py-4 text-center">Edit / Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GetAllUsers;
