const express = require("express");
const router = express.Router();

router.post("/signup", authDoctor.signup);
router.post("/login", authDoctor.login);
router.get("/logout", authDoctor.logout);


router
  .route("/")
  .get(doctorController.getAllDoctors)
  .post(
    authDoctor.protect,
    doctorController.createOneDoctor
  );

router
  .route("/:id")
  .get(doctorController.getOneDoctor)
  .patch(
    authDoctor.protect,
    doctorController.updateOneDoctor
  )
  .delete(doctorController.deleteOneDoctor);

router.patch("/updateMyPassword/:id", authDoctor.updatePassword);
router.patch("/updateMyPasswordNormal", authDoctor.updatePassword);

module.exports = router;
