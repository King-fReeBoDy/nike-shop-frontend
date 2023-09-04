import { Outlet } from "react-router-dom";
import DashboradSidebar from "../components/DashboradSidebar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-4 w-[90%] xl:w-[1024px] mx-auto  gap-x-8 h-[80vh] ">
      <div className="col-span-1">
        <DashboradSidebar />
      </div>
      <div className="overflow-y-auto col-span-3">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
