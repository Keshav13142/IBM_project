import React from "react";

const JobCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl">job title</div>
        <div className="text-lg mb-2 text-gray-400">company</div>
        <p className="text-gray-800 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 mb-2">
        <a className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded">
          apply
        </a>
      </div>
    </div>
  );
};

export default JobCard;
