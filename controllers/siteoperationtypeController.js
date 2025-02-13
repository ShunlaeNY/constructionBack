const {Sequelize} = require('sequelize');
const db = require("../models").SiteOperationtype;
const siteDB = require('../models').Site;
const operationtypeDB = require('../models').Operationtype;

const getAll = async (req, res) => {
    await db
      .findAll({
        include: [
            {
              model: siteDB,
              attributes: ["name"],
            },
            {
              model: operationtypeDB,
              attributes: ["name"],
            }
          ],
          
      })
      .then((datas) => {
        if (datas.length > 0) {
          res.status(200).json(datas);
        } else {
          res.status(404).json("No Site Operation Data.");
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
              model: siteDB,
              attributes: ["name"],
            },
            {
              model: operationtypeDB,
              attributes: ["name"],
            }
          ],
      })
      .then((data) => {
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(404).json("Data not found");
        }
      })
      .catch((err) => {
        res.status(500).json("Error : " + err);
      });
};

const getByOperaiontypeId = async (req, res) => {
    await db
      .findAll({
        where: { operationtypeId: req.params.id },
      })
      .then((datas) => {
        if (datas.length > 0) {
          res.status(200).json(datas);
        } else {
          res.status(404).json("Partners not found in this Staff!");
        }
      })
      .catch((err) => res.status(500).json("Error: " + err.message));
};

const addNew = async (req, res) => {
    await db
      .findOne({ where: { id: req.body.id } })
      .then((data) => {
        if (data != null) {
          return res.status(400).json("Site Operation already exist.");
        } else {
          // console.log(req.body);
          return db.create(req.body);
        }
      })
      .then(() => {
        res.status(201).json("Site Operation created Successfully.");
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

module.exports = { getAll, getById, getByOperaiontypeId, addNew, editData, deleteData };