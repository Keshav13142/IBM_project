import React from 'react'

const JobCard = ({title,company,description,link}) => {
  return (
    <div class="max-w-sm flex flex-col rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl">{title}</div>
    <div className="text-lg mb-2 text-gray-400">{company}</div>
    <p class="text-ellipsis overflow-hidden text-gray-800 text-base">
      {description}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 mt-auto mb-2">
  <a href={link} target="__blank" class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 mb-0 mt-4 px-4 border border-primary hover:border-transparent rounded">
  apply
</a>
</div>
</div>
  )
}

export default JobCard
