const { getConnection } = require("../db_config");

const asyncHandler = require("express-async-handler");

const getUserProfile = asyncHandler(async (req, res) => {
  const conn = getConnection();
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const conn = getConnection();
});

const deleteFromUserProfile = asyncHandler(async (req, res) => {
  const conn = getConnection();
});

module.exports = { getUserProfile, updateUserProfile, deleteFromUserProfile };
