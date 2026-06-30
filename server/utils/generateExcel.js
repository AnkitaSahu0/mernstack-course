const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

const updateExcelSheet = async (contacts) => {
  const workbook = new ExcelJS.Workbook();
  const filePath = path.join(__dirname, '../excel/Contacts.xlsx');

  // Check if directory exists
  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
  }

  const sheet = workbook.addWorksheet('Leads');
  sheet.columns = [
    { header: 'Name', key: 'name', width: 25 },
    { header: 'Email', key: 'email', width: 30 },
    { header: 'Phone', key: 'phone', width: 15 },
    { header: 'Plan', key: 'plan', width: 20 },
    { header: 'Message', key: 'message', width: 40 },
    { header: 'Date', key: 'date', width: 20 }
  ];

  contacts.forEach(c => {
    sheet.addRow({
      name: c.name,
      email: c.email,
      phone: c.phone,
      plan: c.plan,
      message: c.message,
      date: c.createdAt.toISOString()
    });
  });

  await workbook.xlsx.writeFile(filePath);
};

module.exports = { updateExcelSheet };