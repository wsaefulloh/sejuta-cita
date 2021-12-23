const express = require("express");
const routing = express.Router();
const users = require("../controllers/controllers_user");
const validate = require("../middleware/validate")

//CREATE --> POST
routing.post("/admin", users.addDataAdmin);
routing.post("/user", users.addDataUser);

//READ --> GET
routing.get("/", validate(['admin']), users.getAll);
routing.get("/profile", validate(['user', 'admin']), users.getUser);

//UPDATE --> PUT
routing.put("/:username", validate(['admin']), users.updateData)

//DELETE --> DELETE
routing.delete("/", validate(['admin']), users.removeData)

module.exports = routing