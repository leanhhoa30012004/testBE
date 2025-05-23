const connection = require("../config/database");
const getAllUser = async () => {
  let [results, fields] = await connection.query("Select * From Users");
  return results;
};
module.exports = { getAllUser };
