const express = require("express");
const { errorHandler, notFound } = require("./middlewares/error_handlers");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const authRouter = require("./routes/auth_router");
const skillsRouter = require("./routes/skills_router");
const userRouter = require("./routes/user_profile_router");
const { connectToDb } = require("./db_config");
const asyncHandler = require("express-async-handler");
const path = require("path");
const cors = require("cors");

asyncHandler(connectToDb());

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRouter);
app.use("/api/skills", skillsRouter);
app.use("/api/user", userRouter);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
