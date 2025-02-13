const {Sequelize} = require('sequelize');
const db = require("../models").Site;
const businesspartnerDB = require('../models').Businesspartner;
const staffDB = require('../models').Staff;

const getAll = async (req, res) => {
    await db
      .findAll({
        include: [
            {
              model: staffDB,
              attributes: ["name"],
            },
            {
              model: businesspartnerDB,
              attributes: ["name"],
            }
          ],
      })
      .then((datas) => {
        if (datas.length > 0) {
          res.status(200).json(datas);
        } else {
          res.status(404).json("No Site Data.");
        }
      })
      .catch((error) => {
        res.status(500).json("Error" + error.message);
      });
};

const getById = async (req, res) => {
    await db
      .findOne({
        where: { id: req.params.id },
        include: [
            {
              model: staffDB,
              attributes: ["name"],
            },
            {
              model: businesspartnerDB,
              attributes: ["name"],
            }
          ],
      })
      .then((data) => {
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(404).json("Site not found");
        }
      })
      .catch((err) => {
        res.status(500).json("Error : " + err);
      });
};

const getByBusinesspartnerId = async (req, res) => {
    await db
      .findAll({
        where: { businesspartnerId: req.params.id },
        include: [
            {
              model: staffDB,
              attributes: ["name"],
            },
            {
              model: businesspartnerDB,
              attributes: ["name"],
            }
          ],  
      })
      .then((datas) => {
        if (datas.length > 0) {
          res.status(200).json(datas);
        } else {
          res.status(404).json("Staffs not found in this UserType!");
        }
      })
      .catch((err) => res.status(500).json("Error: " + err.message));
};

const getByStaffId = async (req, res) => {
    await db
      .findAll({
        where: { staffId: req.params.id }
      })
      .then((datas) => {
        if (datas.length > 0) {
          res.status(200).json(datas);
        } else {
          res.status(404).json("Staffs not found in this Team!");
        }
      })
      .catch((err) => res.status(500).json("Error: " + err.message));
};

const addNew = async (req, res) => {
    await db
      .findOne({ where: { name: req.body.name } })
      .then((data) => {
        if (data != null) {
          return res.status(400).json("Site already exist.");
        } else {
          // console.log(req.body);
          return db.create(req.body);
        }
      })
      .then(() => {
        res.status(201).json("Site created Successfully.");
      })
      .catch((err) => {
        return res.status(400).json(err.message);
      });
};
  
  const editData = async (req, res) => {
    await db
      .findOne({ where: { id: req.params.id } })
      .then((data) => {
        if (data != null) {
          db.update(req.body, { where: { id: req.params.id } }).then((_) => {
            res.status(200).json("Selected Data updated");
          });
        } else {
          res.status(404).json("Data not found");
        }
      })
      .catch((err) => {
        res.status(500).json("Error : " + err);
      });
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

module.exports = { getAll, getById, getByBusinesspartnerId, getByStaffId, addNew, editData, deleteData };