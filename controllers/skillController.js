const {Sequelize} = require('sequelize');
const db = require("../models").Skill;

const getAll = async (req, res) => {
    await db
      .findAll()
      .then((datas) => {
        if (datas.length > 0) {
          res.status(200).json(datas);
        } else {
          res.status(404).json("No Skill Data.");
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
          res.status(404).json("Skill not found");
        }
      })
      .catch((err) => {
        res.status(500).json("Error : " + err);
      });
  };

module.exports = { getAll, getById };