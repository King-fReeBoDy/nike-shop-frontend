import { Outlet } from "react-router-dom";
import DashboradSidebar from "./DashboradSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="h-screen bg-black w-[300px]">
        <DashboradSidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
