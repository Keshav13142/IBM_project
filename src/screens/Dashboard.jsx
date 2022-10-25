import React, { useContext } from "react";
import JobCard from "../components/JobCard";
import Links from "../components/Links";
import SearchBar from "../components/SearchBar";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="flex gap-10 my-10 lg:my-24 mx-20 lg:mx-40">
      <div className="hidden lg:block bg-primary w-1/5 p-10 h-3/6 rounded-lg">
        <div className="text-xl text-white capitalize font-extrabold mb-6">
          Top jobs
        </div>
        <ul className="list-none text-gray-400 underline flex flex-col gap-2">
          <Links />
          <Links />
          <Links />
          <Links />
          <Links />
        </ul>
      </div>

      <div className="mx-auto">
        <SearchBar />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
