const { Sequelize } = require("sequelize");
const db = require("../models").SiteOperationtype;
const siteDB = require("../models").Site;
const operationtypeDB = require("../models").Operationtype;

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
        },
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
        },
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
      where: { operationtypesId: req.params.id },
      include: [
        {
          model: siteDB,
          attributes: ["name"],
        },
        {
          model: operationtypeDB,
          attributes: ["name"],
        },
      ],
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

const getBySiteId = async (req, res) => {
  await db
    .findAll({
      where: { siteId: req.params.id }, // Filter by siteId instead of operationtypesId
      include: [
        {
          model: siteDB,
          attributes: ["name"],
        },
        {
          model: operationtypeDB,
          attributes: ["name"],
        },
      ],
    })
    .then((datas) => {
      if (datas.length > 0) {
        res.status(200).json(datas);
      } else {
        res.status(404).json("No records found for this Site!");
      }
    })
    .catch((err) => res.status(500).json("Error: " + err.message));
};

const addNew = async (req, res) => {
  try {
    const existingData = await db.findOne({
      where: {
        siteId: req.body.siteId,
        operationtypesId: req.body.operationtypesId,
      },
    });

    if (existingData) {
      return res.status(400).json({ error: "Site Operation already exists." });
    }

    // Create the new site operation record
    const newData = await db.create(req.body);
    return res
      .status(201)
      .json({ message: "Site Operation created successfully.", data: newData });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// const addNew = async (req, res) => {
//   await db
//     .findOne({
//       where:
//         { siteId: req.body.siteId } &
//         { operationtypesId: req.body.operationtypesId },
//     })
//     .then((data) => {
//       if (data != null) {
//         return res.status(400).json("Site Operation already exist.");
//       } else {
//         // console.log(req.body);
//         return db.create(req.body);
//       }
//     })
//     .then(() => {
//       res.status(201).json("Site Operation created Successfully.");
//     })
//     .catch((err) => {
//       return res.status(400).json(err.message);
//     });
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
  getByOperaiontypeId,
  getBySiteId,
  getBySiteId, addNew,
  editData,
  deleteData,
};
