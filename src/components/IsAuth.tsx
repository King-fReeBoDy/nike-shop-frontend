import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const IsAuth = () => {
  const [user] = useState(true);
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default IsAuth;
