import React from "react";
import { TiTick } from "react-icons/ti";

const Skill = ({ skill, setSkill, checked }) => {
  return (
    <li
      className="hover:text-white cursor-pointer flex gap-1 items-center"
      onClick={() => setSkill(skill)}
    >
      {skill}
      {checked && <TiTick />}
    </li>
  );
};

export default Skill;
