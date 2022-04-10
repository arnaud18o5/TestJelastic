const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
  try {
      console.log(process.env.DB_URL);
    /*await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });*/
    console.log('DB connected successfully');
  } catch (e) {
    console.error('Connection to db failed: ', e);
  }
})();

export default mongoose.connection;