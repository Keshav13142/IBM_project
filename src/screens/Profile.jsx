import React from 'react'
import { useState } from 'react'

const Profile = () => {
  const profile="https://www.ubayaschool.com/wp-content/uploads/2018/02/pexels-photo-672358-1.jpeg"
  const [name, setname] = useState("dheeraj")
  const [location, setlocation] = useState("India")
  const [email, setemail] = useState("Dheerajhemachandran@gmai.com")
  const [skill, setskill] = useState("")
  const [skills, setskills] = useState([])
  const [image, setimage] = useState(null)

  const handleChange=(e)=>{
    if(e.target.name=="name")
    setname(e.target.value)
    if(e.target.name=="email")
    setemail(e.target.value)
    if(e.target.name=="location")
    setlocation(e.target.value) 
    if(e.target.name=="skill")
    setskill(e.target.value)
  }

  const changeSkills=()=>{
    if(skill!=="")
    {
      if(skills.includes(skill)===false)
      {
        const newskills=skills.concat(skill)
        setskills(newskills)
      }
    }
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    
  }

  
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      
      setimage(URL.createObjectURL(img))
      
    }
  };

  return (
    <div className='my-5 lg:my-24 mx-10 lg:mx-60'>
      <div className="text-3xl text-primary font-bold text-center py-5">Profile Details</div>
      <div className='bg-primary w-full h-fit rounded-xl'>
         <form className="flex flex-col py-10" onSubmit={handlesubmit}>
          <div className="flex flex-col mx-auto items-center gap-4 my-10">
          <div className="mx-10 text-white text-xl">Profile:</div>
          <img src={image} className="w-52 h-52 rounded-full" alt="" />
          <input type="file" name="myImage" onChange={onImageChange} />
         </div>
          <div className="mx-10 text-white text-xl">Name:</div>
          <input
              value={name}
              type="text"
              name="name"
              placeholder="change name"
              className="input mx-10 mb-6 input-bordered input-primary"
              onChange={handleChange}
            />
            <div className="mx-10 text-white text-xl">Location:</div>
            <input
                value={location}
                type="text"
                name="location"
                placeholder="change India"
                className="input mx-10 mb-6 input-bordered input-primary"
                onChange={handleChange}
              />
            <div className="mx-10 text-white text-xl">Email:</div>
            <input
                value={email}
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="input mx-10 mb-6 input-bordered input-primary"
                onChange={handleChange}
              />

              <div className="mx-10 text-white text-xl">Skills:</div>    
              <div className="">
              <input
                type="text"
                name="skill"
                placeholder="add skill"
                onChange={handleChange}
                className="input mx-10 w-1/2 mb-6 input-bordered input-primary"
              />
              
              <button className='btn btn-priamry mb-6' onClick={changeSkills}>+</button>
              <ul className='mx-10 flex gap-2'>
                {skills.map((skill)=>
                (<li className="bg-slate-400 rounded w-fit my-2 px-3 py-2">{skill}</li>))}
                
              </ul>
              </div>

              <button className='btn btn-priamry w-fit mx-10 mt-6' type='sumbit'>change</button>
      
      </form>
      
     
      </div>
    </div>
  )
}

export default Profile
