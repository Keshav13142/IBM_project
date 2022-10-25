import React, { useContext, useEffect,useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import JobCard from "../components/JobCard";
import Skill from "../components/Skill";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const { user, setUser } = useContext(AppContext);

  const skills=["python","aws"]
  
  const [query, setquery] = useState(null)
  const id="d0011a4d"
  const key="93ce99da369260830b2640af5cf56923"
  const baseURL = `http://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${id}&app_key=${key}&results_per_page=100&what=${query}&what_and=${skills}&content-type=application/json`;

  const [posts, setposts] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const data=response.data
      setposts(data.results)
  })
}, [query])


  return(
  <div className="flex gap-10 my-10 lg:my-24 mx-20 lg:mx-40">
    <div className="hidden lg:block bg-primary w-1/5 p-10 h-3/6 rounded-lg">
      <div className="text-xl text-white capitalize font-extrabold mb-6">Your skills</div>
    <ul className="list-none text-gray-200 flex flex-col gap-2">
        {skills.map((skill)=>
        <Skill skill={skill}/> 
        )}
      </ul>
      <button className="p-2 bg-white text-primary rounded mt-5"><a href="/profile">Change Skills</a></button>
    </div>

    <div className="mx-auto">
      <SearchBar setquery={setquery} />
      
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">


     {query!==null?
     (posts.map((post)=>
        <JobCard title={post.title} company={post.company.display_name} description={post.description} link={post.redirect_url} />
     ))
     :
     <>
    </>}
      </div>
    </div>

  </div>
  );
};

export default Dashboard;
