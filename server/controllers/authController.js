const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid Credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ success: true, token, message: 'Logged in successfully' });
  } catch (error) {
    next(error);
  }
};

// Seed initial user if database is empty
exports.registerInitialAdmin = async (req, res, next) => {
  try {
    const userExist = await User.findOne();
    if (userExist) return res.status(400).json({ message: 'Admin already initialized' });

    const admin = new User({ email: "admin@beangate.com", password: "SecurePassword123" });
    await admin.save();
    res.json({ success: true, message: 'Initial Admin seed complete.' });
  } catch (error) {
    next(error);
  }
};