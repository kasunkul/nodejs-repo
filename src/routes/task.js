const express = require("express");
const controller = require("../controllers/task");
const router = express.Router();

router.get(
    "/getAll", controller.getAll
);

router.post(
    "/getTaskDetail", controller.getTaskDetail
);

router.post(
    "/create", controller.create
);

router.post(
    "/update", controller.update
);

router.post(
    "/remove", controller.remove
);



module.exports = router;