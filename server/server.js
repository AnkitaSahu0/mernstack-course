require('dotenv').config();
const app = require('./app');
const connectDB = async () => {
  try {
    await require('./config/db')();
  } catch(e) {
    console.log(e);
  }
};

// Initial Execution Engine Connect
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend Engine running in production matrix on port ${PORT}`);
});