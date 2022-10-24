import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { user } = useContext(AppContext);

  return <div>{user?.email}</div>;
};

export default Dashboard;
