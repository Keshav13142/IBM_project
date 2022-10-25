import React, { useContext, useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AppContext } from "../context/AppContext";
import { getUserSkills, saveUserSkills } from "../proxies/backend_api";

const Profile = () => {
  const { user, setShowAlert } = useContext(AppContext);

  const profile =
    "https://www.ubayaschool.com/wp-content/uploads/2018/02/pexels-photo-672358-1.jpeg";
  const [name, setname] = useState("dheeraj");
  const [location, setlocation] = useState("India");
  const [email, setemail] = useState("Dheerajhemachandran@gmai.com");
  const [skill, setskill] = useState("");
  const [skills, setSkills] = useState([]);
  const [newSkills, setNewSkills] = useState([]);
  const [removedSkills, setRemovedSkills] = useState([]);
  const [image, setimage] = useState(null);

  const handleChange = (e) => {
    if (e.target.name == "name") setname(e.target.value);
    if (e.target.name == "email") setemail(e.target.value);
    if (e.target.name == "location") setlocation(e.target.value);
    if (e.target.name == "skill") setskill(e.target.value);
  };

  const changeSkills = () => {
    if (skill !== "" && !skills.includes(skill)) {
      setNewSkills((prev) => [...prev, skill]);
      setSkills((prev) => [...prev, skill]);
    }
    setskill("");
  };

  const removeSkills = (skill_name) => {
    setRemovedSkills((prev) => [...prev, skill_name]);
    setSkills((prev) => prev.filter((item) => item !== skill_name));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];

      setimage(URL.createObjectURL(img));
    }
  };

  const updateProfile = async () => {
    if (newSkills.length === 0 && removedSkills.length === 0) return;
    const data = await saveUserSkills(newSkills, user.token);
    if (data) {
      setShowAlert({
        type: "success",
        message: "Profile updated!",
        duration: 3000,
      });
    }
    setNewSkills([]);
  };

  useEffect(() => {
    if (user)
      (async () => {
        let data = await getUserSkills(user?.token);
        if (data) setSkills(data);
      })();
  }, [user]);

  return (
    <div className="my-5 mx-10">
      <form className="flex flex-col" onSubmit={handlesubmit}>
        <div className="flex flex-col mx-auto items-center gap-4">
          <div className="mx-1 self-start text-xl">Profile:</div>
          <img
            src={"avatar.webp"}
            className="w-[10%] rounded-full"
            alt="avatar"
          />
          <input type="file" name="myImage" onChange={onImageChange} />
        </div>
        <div className="mx-10 my-5 text-xl">Name: {user?.name}</div>
        {/* <input
          value={name}
          type="text"
          name="name"
          placeholder="change name"
          className="input mx-10 mb-6 input-bordered input-primary"
          onChange={handleChange}
        /> */}
        {/* <div className="mx-10 text-white text-xl">Location:</div> */}
        {/* <input
          value={location}
          type="text"
          name="location"
          placeholder="change India"
          className="input mx-10 mb-6 input-bordered input-primary"
          onChange={handleChange}
        /> */}
        <div className="mx-10 text-xl">Email:</div>
        <input
          value={email}
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="input mx-10 mb-6 input-bordered input-primary"
          onChange={handleChange}
        />

        <div className="mx-10 text-xl">Skills:</div>
        <div className="">
          <input
            value={skill}
            type="text"
            name="skill"
            placeholder="add skill"
            onChange={handleChange}
            className="input mx-10 w-1/2 mb-6 input-bordered input-primary"
          />

          <button className="btn btn-priamry mb-6" onClick={changeSkills}>
            +
          </button>
          <ul className="mx-10 flex gap-2">
            {skills?.map((skill, ind) => (
              <li
                className="bg-gray-300 rounded w-fit my-2 px-3 py-2 flex gap-2 items-center"
                key={ind}
              >
                {skill}
                <MdDeleteForever
                  color="#ff8977"
                  onClick={() => removeSkills(skill)}
                  size={20}
                />
              </li>
            ))}
          </ul>
        </div>

        <button
          className="btn btn-priamry w-fit mx-10 mt-6"
          type="button"
          onClick={updateProfile}
        >
          Save
        </button>
      </form>
      {/* <div className="border-2 border-blue-100 w-full h-fit rounded-xl p-5 flex flex-col gap-3">
        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-between">
            <h1 className="text-2xl font-medium flex items-center gap-4">
              Your Profile{" "}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "#000000" }}
                >
                  {" "}
                  <path d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"></path>
                </svg>
              </button>
            </h1>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl">{user?.name}</h2>
              <p className="text-xl text-gray-700">{user?.email}</p>
              <span className="text-gray-700">{user?.phone_number}</span>
            </div>
          </div>
          <div className="flex flex-col justify-end w-fit gap-4">
            <img
              src="avatar.webp"
              alt="profile"
              className="w-36 rounded-md object-contain"
            />
            <button className="btn btn-outline btn-active">change</button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="">
          <div className="">
            <h4>Resume/Portfolio</h4>
          </div>
          <div className="">
            <h4>Resume/Portfolio</h4>
          </div>
          <div className="">
            <h4>Resume/Portfolio</h4>
          </div>
          <div className="">
            <h4>Resume/Portfolio</h4>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
