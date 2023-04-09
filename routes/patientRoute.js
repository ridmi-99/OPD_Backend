const express = require("express");
const router = express.Router();

router.post("/signup", authPatient.signup);
router.post("/login", authPatient.login);
router.get("/logout", authPatient.logout);

router.use("/search", patientController.searchPatient);

router
  .route("/")
  .get(authController.protect, patientController.getAllPatients)
  .post(
    authPatient.protect,
    patientController.createOnePatient
  );

router
  .route("/:id")
  .get(authPatient.protect, patientController.getOnePatient)
  .patch(
    authPatient.protect,
    patientController.updateOnePatient
  )
  .delete(authController.protect, patientController.deleteOnePatient);

router.patch("/updateMyPassword/:id", authPatient.updatePassword);
router.patch("/updateMyPasswordNormal", authPatient.updatePassword);

module.exports = router;
