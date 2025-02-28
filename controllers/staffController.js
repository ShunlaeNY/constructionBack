const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../models").Staff;
const teamDB = require("../models").Team;
const usertypesDB = require("../models").UserTypes;

const getAll = async (req, res) => {
  await db
    .findAll({
      include: [
        {
          model: usertypesDB,
          attributes: ["name"],
        },
        {
          model: teamDB,
          attributes: ["name"],
        },
      ],
    })
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
    .findOne({
      where: { id: req.params.id },
      include: [
        {
          model: usertypesDB,
          attributes: ["name"],
        },
        {
          model: teamDB,
          attributes: ["name"],
        },
      ],
    })
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

const getByUsertypesId = async (req, res) => {
  await db
    .findAll({
      where: { usertypesId: req.params.id },
      include: [
        {
          model: usertypesDB,
          attributes: ["name"],
        },
        {
          model: teamDB,
          attributes: ["name"],
        },
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

const getByTeamId = async (req, res) => {
  await db
    .findAll({
      where: { teamId: req.params.id },
      include: [
        {
          model: usertypesDB,
          attributes: ["name"],
        },
        {
          model: teamDB,
          attributes: ["name"],
        },
      ],
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
  try {
    // Check if the email exists
    const existingStaff = await db.findOne({
      where: { email: req.body.email },
    });

    if (existingStaff) {
      return res
        .status(400)
        .json({ error: "Staff with this email already exists." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

    // Create staff
    const newStaff = await db.create(req.body);

    return res
      .status(201)
      .json({ message: "Staff created successfully.", staff: newStaff });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

// const addNew = async (req, res) => {
//     await db
//       .findOne({ where: { name: req.body.name } })
//       .then((data) => {
//         if (data != null) {
//           return res.status(400).json("Team already exist.");
//         } else {
//           // console.log(req.body);
//           return db.create(req.body);
//         }
//       })
//       .then(() => {
//         res.status(201).json("Team created Successfully.");
//       })
//       .catch((err) => {
//         return res.status(400).json(err.message);
//       });
// };

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

module.exports = {
  getAll,
  getById,
  getByUsertypesId,
  getByTeamId,
  addNew,
  editData,
  deleteData,
};
