const express = require("express");
const proyectoController = require("../controllers/proyectoController");
const router = express.Router();
const auth = require("../middleware/auth");
const { check } = require("express-validator");

router.post(
  "/",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  proyectoController.crearProyecto
);

router.get("/", auth, proyectoController.obtenerProyecto);
router.put(
  "/:id",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  proyectoController.actualizarProyecto
);
router.delete("/:id", auth, proyectoController.eliminarProyecto);
module.exports = router;
