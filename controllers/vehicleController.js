const {Sequelize} = require('sequelize');
const db = require("../models").Vehicle;
const groupDB = require('../models').Group;

const getAll = async (req, res) => {
    await db
      .findAll({
        include: {
          model: groupDB,
          attributes: ["name"],
        },
      })
      .then((datas) => {
        if (datas.length > 0) {
          res.status(200).json(datas);
        } else {
          res.status(404).json("No Vehicle Data.");
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
        include: {
          model: groupDB,
          attributes: ["name"],
        }
      })
      .then((data) => {
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(404).json("Vehicle not found");
        }
      })
      .catch((err) => {
        res.status(500).json("Error : " + err);
      });
};

const getByGroupId = async (req, res) => {
    await db
      .findAll({
        where: { groupId: req.params.id },
        include: {
          model: groupDB,
          attributes: ["name"],
        }  
      })
      .then((datas) => {
        if (datas.length > 0) {
          res.status(200).json(datas);
        } else {
          res.status(404).json("Vehicles not found in this Group!");
        }
      })
      .catch((err) => res.status(500).json("Error: " + err.message));
};

const addNew = async (req, res) => {
    await db
      .findOne({ where: { name: req.body.name } })
      .then((data) => {
        if (data != null) {
          return res.status(400).json("Vehicle already exist.");
        } else {
          // console.log(req.body);
          return db.create(req.body);
        }
      })
      .then(() => {
        res.status(201).json("Vehicle created Successfully.");
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

  const updateOrder = async (req, res) => {
    const {items} = req.query;
    if (!Array.isArray(items)){
      return res.status(400).json({message: "Invalid data"})
    }

    const connection = await db.promise();
    try{
      await connection.beginTransaction();

      for (let i = 0; i < items.length; i++) {
        const {id} = items[i];
        await connection.query("UPDATE vehicle SET position = ? WHERE id = ?", [i,id])
      }
      
      await connection.commit();
      res.status(200).json({message: "Vehicles updated successfully"})
    }
    catch(err){
      await connection.rollback();
      res.status(500).json({message: "Error while updating vehicles", error: err.message})
    }
  }

module.exports = { getAll, getById, getByGroupId, addNew, editData, deleteData,updateOrder };