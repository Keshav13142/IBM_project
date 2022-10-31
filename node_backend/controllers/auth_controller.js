const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const { getConnection } = require("../db_config");

//Handles user login
const loginUser = asyncHandler(async (req, res) => {
  const conn = getConnection();

  //Get the data from the request body
  const { email, password } = req.body;

  //If any of the feilds are empty then throw an error
  if (!email || !password) {
    res.status(400);
    throw new Error("Enter all the details");
  }

  const stmt = await conn.prepare(`select * from users where email='${email}'`);

  const result = await stmt.execute();

  const data = await result.fetchAll();

  //If the user does not exist or the passwords don't match then throw an error
  if (data.length === 0) throw new Error(`You don't have an account!`);

  const [user] = data;

  if (!(await bcrypt.compare(password, user.PASSWORD))) {
    throw new Error(`Incorrect email or password`);
  }

  //Generating the JWT token
  const payload = {
    user: {
      id: user.USER_ID,
      email: user.EMAIL,
    },
  };

  const token = await jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: 360000000,
  });

  //Set the response status to 200 and send the details
  res.status(200).json({
    id: user.USER_ID,
    name: user.NAME,
    email: user.EMAIL,
    phoneNumber: user.PHONE_NUMBER,
    token: token,
  });
});

//Handles user registration
const registerUser = asyncHandler(async (req, res) => {
  const conn = getConnection();

  //Get the data from the request body
  const { name, email, phone_number, password } = req.body;

  // If any of the feilds are empty throw an error
  if (!email || !password || !phone_number || !name) {
    res.status(400);
    throw new Error(`Enter all the details!`);
  }

  let stmt = await conn.prepare(
    `select * from users where email='${email}' or phone_number='${phone_number}'`
  );

  let result = await stmt.execute();

  let data = await result.fetchAll();

  if (data.length !== 0) throw new Error(`You already have an account!`);

  //Hash the password
  hashedPass = await bcrypt.hash(password, 10);

  stmt = await conn.prepare(
    `insert into users(name,email,phone_number,password) values('${name}','${email}','${phone_number}','${hashedPass}')`
  );

  result = await stmt.execute();

  data = await result.fetchAll();

  if (data) {
    const token = await jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: 360000,
    });

    //Set resp status to 201 and send the details
    res.status(201).json({
      name,
      email,
      phone_number,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong!!!");
  }
});

module.exports = { loginUser, registerUser };
