const Contact = require('../models/Contact');

const { sendContactAlert } = require('../services/mailService'); 
const { updateExcelSheet } = require('../utils/generateExcel');

exports.submitForm = async (req, res, next) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    // Trigger async non-blocking tasks
    await sendContactAlert(newContact);
    
    const allContacts = await Contact.find();
    await updateExcelSheet(allContacts);

    res.status(201).json({ success: true, message: 'Query received successfully!' });
  } catch (error) {
    next(error);
  }
};

exports.getLeads = async (req, res, next) => {
  try {
    const leads = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: leads });
  } catch (error) {
    next(error);
  }
};