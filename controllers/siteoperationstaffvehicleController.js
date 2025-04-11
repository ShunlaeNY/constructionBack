const { Sequelize } = require("sequelize");
const db = require("../models").SiteOperationStaffVehicle;
const siteoperationDB = require("../models").SiteOperationtype;
const vehicleDB = require("../models").Vehicle;
const staffDB = require("../models").Staff;
const { Op } = require("sequelize");
const getAll = async (req, res) => {
  await db
    .findAll({
      include: [
        {
          model: staffDB,
          attributes: ["name"],
        },
        {
          model: vehicleDB,
          attributes: ["name"],
        },
        {
          model: siteoperationDB,
        },
      ],
    })
    .then((datas) => {
      if (datas.length > 0) {
        res.status(200).json(datas);
      } else {
        res.status(404).json("No Site Operation Staff Vehicle Data.");
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
          model: vehicleDB,
          attributes: ["name"],
        },
        {
          model: siteoperationDB,
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

const getStaffBySiteoperationtypesId = async (req, res) => {
  await db
    .findAll({
      where: {
        siteoperationtypesId: req.params.id,
        staffId: { [Op.ne]: null }, // ✅ vehicleId IS NOT NULL
      },
      include: [
        {
          model: staffDB,
          attributes: ["id", "name", "image", "teamId", "position"],
        },
      ],
    })
    .then((datas) => {
      if (datas.length > 0) {
        res.status(200).json(datas);
      } else {
        res.status(404).json("No vehicle-linked data found.");
      }
    })
    .catch((err) => res.status(500).json("Error: " + err.message));
};
const getVehicleBySiteoperationtypesId = async (req, res) => {
  await db
    .findAll({
      where: {
        siteoperationtypesId: req.params.id,
        vehicleId: { [Op.ne]: null }, // ✅ vehicleId IS NOT NULL
      },
      include: [
        {
          model: vehicleDB,
          attributes: ["id", "name", "image", "groupId", "status"],
        },
      ],
    })
    .then((datas) => {
      if (datas.length > 0) {
        res.status(200).json(datas);
      } else {
        res.status(404).json("No vehicle-linked data found.");
      }
    })
    .catch((err) => res.status(500).json("Error: " + err.message));
};

// const getBySiteoperationtypesId = async (req, res) => {
//   await db
//     .findAll({
//       where: { siteoperationtypesId: req.params.id },
//       include: [
//         {
//           model: staffDB,
//           attributes: ["id", "name", "image", "teamId", "position"],
//         },
//         {
//           model: vehicleDB,
//           attributes: ["id", "name", "image", "groupId", "status"],
//         },
//         {
//           model: siteoperationDB,
//         },
//       ],
//     })
//     .then((datas) => {
//       if (datas.length > 0) {
//         res.status(200).json(datas);
//       } else {
//         res.status(404).json("Data not found in this!");
//       }
//     })
//     .catch((err) => res.status(500).json("Error: " + err.message));
// };

const getBystaffId = async (req, res) => {
  await db
    .findAll({
      where: { staffId: req.params.id },
      include: [
        {
          model: staffDB,
          attributes: ["name"],
        },
        {
          model: vehicleDB,
          attributes: ["name"],
        },
        {
          model: siteoperationDB,
        },
      ],
    })
    .then((datas) => {
      if (datas.length > 0) {
        res.status(200).json(datas);
      } else {
        res.status(404).json("Data not found in this!");
      }
    })
    .catch((err) => res.status(500).json("Error: " + err.message));
};

const getByvehicleId = async (req, res) => {
  await db
    .findAll({
      where: { vehicleId: req.params.id },
      include: [
        {
          model: staffDB,
          attributes: ["name"],
        },
        {
          model: vehicleDB,
          attributes: ["name"],
        },
        {
          model: siteoperationDB,
        },
      ],
    })
    .then((datas) => {
      if (datas.length > 0) {
        res.status(200).json(datas);
      } else {
        res.status(404).json("Data not found in this!");
      }
    })
    .catch((err) => res.status(500).json("Error: " + err.message));
};

const addNew = async (req, res) => {
  try {
    const { siteoperationtypesId, selectedStaff } = req.body;

    // ✅ Step 1: Delete records where siteoperationtypesId matches and staffId exists in the DB
    await db.destroy({
      where: {
        siteoperationtypesId: siteoperationtypesId,
        staffId: {
          [Op.in]: Sequelize.literal(
            `(SELECT staffId FROM SiteOperationStaffVehicles WHERE staffId IS NOT NULL)`
          ),
        },
      },
    });

    // ✅ Step 2: If selectedStaff is empty, return early
    if (!selectedStaff || selectedStaff.length === 0) {
      return res.status(200).json({
        message: "No new staff to add. Data deletion completed.",
      });
    }

    const newEntries = await db.bulkCreate(
      selectedStaff.map((staff) => ({
        ...staff,
        siteoperationtypesId,
      }))
    );

    return res.status(201).json({
      message: "Data updated successfully.",
      data: newEntries,
    });
  } catch (err) {
    console.error("Error in addNew:", err);
    return res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

const addNewVehicle = async (req, res) => {
  try {
    const { siteoperationtypesId, selectedVehicle } = req.body;

    // ✅ Step 1: Delete records where siteoperationtypesId matches and staffId exists in the DB
    await db.destroy({
      where: {
        siteoperationtypesId: siteoperationtypesId,
        vehicleId: {
          [Op.in]: Sequelize.literal(
            `(SELECT vehicleId FROM SiteOperationStaffVehicles WHERE vehicleId IS NOT NULL)`
          ),
        },
      },
    });

    // ✅ Step 2: If selectedVehicle is empty, return early
    if (!selectedVehicle || selectedVehicle.length === 0) {
      return res.status(200).json({
        message: "No new vehicle to add. Data deletion completed.",
      });
    }

    const newEntries = await db.bulkCreate(
      selectedVehicle.map((vehicle) => ({
        ...vehicle,
        siteoperationtypesId,
      }))
    );

    return res.status(201).json({
      message: "Data updated successfully.",
      data: newEntries,
    });
  } catch (err) {
    console.error("Error in addNew:", err);
    return res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
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
  // getBySiteoperationtypesId,
  getBystaffId,
  getByvehicleId,
  addNew,

  editData,
  deleteData,

  getStaffBySiteoperationtypesId,
  getVehicleBySiteoperationtypesId,

  addNewVehicle,
};
