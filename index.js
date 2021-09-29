const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

//crear el servidor
const app = express();

//Puerto de la app
const port = process.env.port || 4000;
const host = process.env.host || "0.0.0.0";

//Conectar Base de datos
conectarDB();

//habilitar cors
app.use(cors());

//Leer datos
app.use(express.json({ extended: true }));

//importar rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/proyectos", require("./routes/proyecto"));
app.use("/api/tareas", require("./routes/tareas"));

//Arrancar la app
app.listen(port, host, () => {
  console.log(`El servidor esta corriendo en el puerto numero: ${port}`);
});
