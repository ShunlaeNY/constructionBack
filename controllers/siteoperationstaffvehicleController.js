const { Sequelize } = require("sequelize");
const db = require("../models").SiteOperationStaffVehicle;
const siteOperationDB = require("../models").SiteOperationtype;
const staffDB = require("../models").Staff;
const vehicleDB = require("../models").Vehicle;

const getAll = async (req, res) => {
  await db
    .findAll({
      include: [
        {
          model: siteOperationDB,
          include: [
            {
              model: require("../models").Site,
              attributes: ["name", "address"],
            },
            {
              model: require("../models").Operationtype,
              attributes: ["name","color"],
            },
          ],
        },
        {
          model: staffDB,
          attributes: ["id", "name", "image", "teamId", "email", "phoneNumber", "address", "dob","position"],
          include: [
            {
              model: require("../models").Team,
              attributes: ["name", "color"],
            },
          ],
        },
        {
          model:vehicleDB,
          attributes:["id", "name", "image", "groupId"],
          include: [
            {
              model: require("../models").Group,
              attributes: ["name", "color"],
            },
          ],
        }
      ],
    })
    .then((datas) => {
      if (datas.length > 0) {
        res.status(200).json(datas);
      } else {
        res.status(404).json("No Site Operation Staff Site Data.");
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
          model: siteOperationDB,
          include: [
            {
              model: require("../models").Site,
              attributes: ["name", "address"],
            },
            {
              model: require("../models").Operationtype,
              attributes: ["name","color"],
            },
          ],
        },
        {
          model: staffDB,
          attributes: ["id", "name", "image", "teamId", "email", "phoneNumber", "address", "dob","position"],
          include: [
            {
              model: require("../models").Team,
              attributes: ["name", "color"],
            },
          ],
        },
        {
          model:vehicleDB,
          attributes:["id", "name", "image", "groupId"],
          include: [
            {
              model: require("../models").Group,
              attributes: ["name", "color"],
            },
          ],
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

const getBySiteOperaiontypeId = async (req, res) => {
  await db
    .findAll({
      where: { siteoperationtypesId: req.params.id },
      include: [
        {
          model: siteOperationDB,
          include: [
            {
              model: require("../models").Site,
              attributes: ["name", "address"],
            },
            {
              model: require("../models").Operationtype,
              attributes: ["name","color"],
            },
          ],
        },
        {
          model: staffDB,
          attributes: ["id", "name", "image", "teamId", "email", "phoneNumber", "address", "dob","position"],
          include: [
            {
              model: require("../models").Team,
              attributes: ["name", "color"],
            },
          ],
        },
        {
          model:vehicleDB,
          attributes:["id", "name", "image", "groupId"],
          include: [
            {
              model: require("../models").Group,
              attributes: ["name", "color"],
            },
          ],
        }
      ],
    })
    .then((datas) => {
      if (datas.length > 0) {
        res.status(200).json(datas);
      } else {
        res.status(404).json("Id not found!");
      }
    })
    .catch((err) => res.status(500).json("Error: " + err.message));
};

const getByStaffId = async (req, res) => {
  await db
    .findAll({
      where: { staffId: req.params.id }, 
      include: [
        {
          model: siteOperationDB,
          include: [
            {
              model: require("../models").Site,
              attributes: ["name", "address"],
            },
            {
              model: require("../models").Operationtype,
              attributes: ["name","color"],
            },
          ],
        },
        {
          model: staffDB,
          attributes: ["id", "name", "image", "teamId", "email", "phoneNumber", "address", "dob","position"],
          include: [
            {
              model: require("../models").Team,
              attributes: ["name", "color"],
            },
          ],
        },
        {
          model:vehicleDB,
          attributes:["id", "name", "image", "groupId"],
          include: [
            {
              model: require("../models").Group,
              attributes: ["name", "color"],
            },
          ],
        }
      ],
    })
    .then((datas) => {
      if (datas.length > 0) {
        res.status(200).json(datas);
      } else {
        res.status(404).json("Id not found!");
      }
    })
    .catch((err) => res.status(500).json("Error: " + err.message));
};

const getByVehicleId = async (req, res) => {
  await db
    .findAll({
      where: { vehicleId: req.params.id }, 
      include: [
        {
          model: siteOperationDB,
          include: [
            {
              model: require("../models").Site,
              attributes: ["name", "address"],
            },
            {
              model: require("../models").Operationtype,
              attributes: ["name","color"],
            },
          ],
        },
        {
          model: staffDB,
          attributes: ["id", "name", "image", "teamId", "email", "phoneNumber", "address", "dob","position"],
          include: [
            {
              model: require("../models").Team,
              attributes: ["name", "color"],
            },
          ],
        },
        {
          model:vehicleDB,
          attributes:["id", "name", "image", "groupId"],
          include: [
            {
              model: require("../models").Group,
              attributes: ["name", "color"],
            },
          ],
        }
      ],
    })
    .then((datas) => {
      if (datas.length > 0) {
        res.status(200).json(datas);
      } else {
        res.status(404).json("Id not found!");
      }
    })
    .catch((err) => res.status(500).json("Error: " + err.message));
};

// const addNew = async (req, res) => {
//   try {
//     const existingData = await db.findOne({
//       where: {
//         siteoperationtypesId:req.body.siteoperationtypesId,
//         staffId: req.body.staffId,
//         vehicleId: req.body.vehicleId,
//       },
//     });

//     if (existingData) {
//       return res.status(400).json({ error: "Site Operation Staff Vehicle already exists." });
//     }

//     // Create the new site operation record
//     const newData = await db.create(req.body);
//     return res
//       .status(201)
//       .json({ message: "Site Operation created successfully.", data: newData });
//   } catch (err) {
//     return res.status(400).json({ error: err.message });
//   }
// };

const addNew = async (req, res) => {
  try {
    const [data, created] = await db.findOrCreate({
      where: {
        siteoperationtypesId: req.body.siteoperationtypesId,
        staffId: req.body.staffId,
        vehicleId: req.body.vehicleId,
      },
      defaults: req.body 
    });
    return res
      .status(created ? 201 : 200)
      .json({ 
        message: created ? "Site Operation created successfully." : "Site Operation already exists.",
        data: data,
        created: created
      });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
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

// const deleteData = async (req, res) => {
//   await db
//     .findByPk(req.params.id)
//     .then((data) => {
//       if (data != null) {
//         data.destroy({ where: { id: req.params.id } }).then((_) => {
//           res.status(200).json("Selected Data deleted");
//         });
//       } else {
//         res.status(404).json("Selected Data not found");
//       }
//     })
//     .catch((err) => {
//       res.status(500).json("Error : " + err);
//     });
// };
const deleteData = async (req, res) => {
  try {
    const data = await db.findByPk(req.params.id);
    
    if (!data) {
      return res.status(404).json("Selected Data not found");
    }
  
    await data.destroy();
    return res.status(200).json("Selected Data deleted");
  } catch (err) {
    return res.status(500).json("Error : " + err);
  }
};



module.exports = {
  getAll,
  getById,
  getBySiteOperaiontypeId,
  getByStaffId,
  getByVehicleId,
  addNew,
  editData,
  deleteData,

};
