const Schema = require("./Schema");
const bcrypt = require("bcryptjs");

async function CR() {
  const testUsr = [
    {
      email: "sediqabdullahi01@gmail.com",
      password: await bcrypt.hash("secure", 10),
    },
  ];
  Schema.user
    .insertMany(testUsr)
    .then((data) => {
      console.log("done", data);
    })
    .catch((err) => console.log(err));
}

module.exports = CR;
