import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { user, setUser } = useContext(AppContext);

  useEffect(() => {
    console.log(user, "From Dashboard");
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
