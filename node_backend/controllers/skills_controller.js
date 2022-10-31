const { getConnection } = require("../db_config");

const asyncHandler = require("express-async-handler");

const getUserSkills = asyncHandler(async (req, res) => {
  const { USER_ID } = req.user;

  const stmt = await conn.prepare(
    `select * from skills where user_id='${USER_ID}'`
  );

  const result = await stmt.execute();

  const skills = await result.fetchAll();

  res.status(200).json({ skills });
});

const postUserSkils = asyncHandler(async (req, res) => {
  const { skills } = req.body;

  if (!skills) {
    res.status(400);
    throw new Error("Skills not provided!");
  }

  if (skills.length === 0) {
    res.status(200).json({ skills: [] });
    return;
  }

  const { USER_ID } = req.user;

  const conn = getConnection();

  let values = "";

  skills.forEach((skill, ind) => {
    values += `${ind === 0 ? "values" : ""}('${skill}',${USER_ID})${
      ind !== skills.length - 1 ? "," : ""
    }`;
  });

  console.log(values);

  const stmt = await conn.prepare(`insert into skills(name,user_id) ${values}`);

  const result = await stmt.execute();

  const data = await result.fetchAll();

  console.log(data);

  if (data) res.status(200).json({ message: "Updated skills successfully!" });
  else throw new Error("Something went wrong!");
});

module.exports = { getUserSkills, postUserSkils };
