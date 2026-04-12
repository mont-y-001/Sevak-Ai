const NGO = require("../models/ngoModel");

const registerNGO = async (req, res) => {
  try {
    const ngo = await NGO.create(req.body);
    res.status(201).json(ngo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerNGO };