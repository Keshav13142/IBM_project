import React from 'react'

const JobCard = () => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl">job title</div>
    <div className="text-lg mb-2 text-gray-400">company</div>
    <p class="text-gray-800 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 mb-2">
  <a class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded">
  apply
</a>
</div>
</div>
  )
}

export default JobCard
