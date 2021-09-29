const express = require("express");
const tareaController = require("../controllers/tareaController");
const router = express.Router();
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//Crear una tarea

router.post(
  "/",
  auth,
  [check("nombre", "El Nombre del proyecto es obligatorio").not().isEmpty()],
  tareaController.crearTarea
);

router.get("/", auth, tareaController.obtenerTareas);

router.put("/:id", auth, tareaController.actualizarTarea);
router.delete("/:id", auth, tareaController.eliminarTarea);

module.exports = router;
