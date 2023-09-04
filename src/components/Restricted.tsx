import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Restricted = () => {
  const [user] = useState(false);
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Restricted;
