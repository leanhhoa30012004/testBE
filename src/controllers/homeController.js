const getHomePage = (req, res) => {
  res.render("sample.ejs");
};
const { getAllUser } = require("../services/CRUDService");
const getHome = async (req, res) => {
  let results = await getAllUser();
  res.render("home.ejs", { listUser: results });
};
const getTestPage = (req, res) => {
  res.render("test.ejs");
};
const connection = require("../config/database");

const getUser = (req, res) => {
  let users = [];
  connection.query("SELECT * FROM `Users`", function (err, results, fields) {
    users = results;
    console.log(users);
    res.send(JSON.stringify(users));
  });
};
const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  console.log("Email: ", email, "name: ", name, "city: ", city);
  let { results, fields } = await connection.query(
    "INSERT INTO Users (email, name, city) VALUES( ?, ?, ?)",
    [email, name, city]
  );
  return getHome(req, res);
};
const postUpdateUser = async (req, res) => {
  let { id, email, name, city } = req.body;
  console.log("id: ", id, ",name: ", name, "city: ", city);
  let { results, fields } = await connection.query(
    `UPDATE Users
SET email=?, name=?, city=?
WHERE id=?;`,
    [email, name, city, id]
  );
  return getHome(req, res);
};
module.exports = {
  getHomePage,
  getTestPage,
  getUser,
  getHome,
  postCreateUser,
  postUpdateUser,
};
