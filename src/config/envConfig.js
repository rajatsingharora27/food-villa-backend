const dotenv = require("dotenv");
dotenv.config();
PORT = process.env.PORT;
module.exports = { PORT };
