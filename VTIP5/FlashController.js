const Flash = require('../models/Flash');

exports.getByWarranty = async (req, res) => {
  try {
    const flashes = await Flash.find({ warrantyPeriod: { $lt: parseInt(req.params.months) } });
    const manufacturers = flashes.map(flash => flash.manufacturer);
    res.json(manufacturers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteByWarranty = async (req, res) => {
  try {
    await Flash.deleteMany({ warrantyPeriod: { $lt: parseInt(req.params.months) } });
    res.json({ message: 'Записи удалены' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};