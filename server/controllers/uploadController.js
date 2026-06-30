const cloudinary = require('../config/cloudinary');
const fs = require('fs');

exports.uploadImage = async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'portfolio_assets'
    });

    // Delete local cache file from server uploads folder
    fs.unlinkSync(req.file.path);

    res.json({ success: true, url: result.secure_url });
  } catch (error) {
    next(error);
  }
};