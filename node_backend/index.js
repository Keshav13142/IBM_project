const express = require("express");
const { errorHandler, notFound } = require("./middlewares/error_handlers");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const indexRouter = require("./routes/index_router");
const authRouter = require("./routes/auth_router");
const skillsRouter = require("./routes/skills_router");
const { connectToDb } = require("./db_config");

connectToDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/api/auth", authRouter);
app.use("/api/skills", skillsRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
