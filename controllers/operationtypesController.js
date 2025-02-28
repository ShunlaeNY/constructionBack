const {Sequelize} = require('sequelize');
const db = require("../models").Operationtype;

const getAll = async (req, res) => {
    await db
      .findAll()
      .then((datas) => {
        if (datas.length > 0) {
          res.status(200).json(datas);
        } else {
          res.status(404).json("No Team Data.");
        }
      })
      .catch((error) => {
        res.status(500).json("Error" + error.message);
      });
};

const getById = async (req, res) => {
    await db
      .findByPk(req.params.id)
      .then((data) => {
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(404).json("Team not found");
        }
      })
      .catch((err) => {
        res.status(500).json("Error : " + err);
      });
};

const addNew = async (req, res) => {
    await db
      .findOne({ where: { name: req.body.name } })
      .then((data) => {
        if (data != null) {
          return res.status(400).json("Team already exist.");
        } else {
          // console.log(req.body);
          return db.create(req.body);
        }
      })
      .then(() => {
        res.status(201).json("Team created Successfully.");
      })
      .catch((err) => {
        return res.status(400).json(err.message);
      });
};
  
const editData = async (req, res) => {
  try {
    console.log(req.body.name)
    const data = await db.findOne({ where: { id: req.params.id } });

    if (data != null) {
      // Update the data with the values from req.body
      await db.update(req.body, { where: { id: req.params.id } });

      // Retrieve the updated data
      const updatedData = await db.findOne({ where: { id: req.params.id } });

      // Return the updated data in the response
      res.status(200).json(updatedData);
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

  
  const deleteData = async (req, res) => {
    await db
      .findByPk(req.params.id)
      .then((data) => {
        if (data != null) {
          data.destroy({ where: { id: req.params.id } }).then((_) => {
            res.status(200).json("Selected Data deleted");
          });
        } else {
          res.status(404).json("Selected Data not found");
        }
      })
      .catch((err) => {
        res.status(500).json("Error : " + err);
      });
  };

module.exports = { getAll, getById, addNew, editData, deleteData };