const express = require("express");
//const db = require("./db/conexion");
const cors = require("cors");
const { router } = require("./adapters/routes/index");

class Server {
  constructor() {
    try {
      this.app = express();
      this.port = process.env.PORT || "8000";

      this.dbConnection();
      this.middlewares();
      this.routes();
    } catch (error) {
      console.error("Error al construir el servidor:", error);
      throw error;
    }
  }

  async dbConnection() {
    try {
      /*     try {
      await db.authenticate();
      // db.sync({ force: true })
      console.log("DB online");
    } catch (error) {
      console.error("No se pudo conectar a la DB");
      throw error;
    } */
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
      throw error;
    }
  }

  middlewares() {
    try {
      this.app.use(cors());
      this.app.use(express.json({ limit: "50mb" }));
    } catch (error) {
      console.error("Error al configurar middlewares:", error);
      throw error;
    }
  }

  routes() {
    try {
      this.app.use(router);
    } catch (error) {
      console.error("Error al configurar rutas:", error);
      throw error;
    }
  }

  async listen() {
    try {
      this.server = await new Promise((resolve, reject) => {
        this.server = this.app.listen(this.port, () => {
          console.log("Servidor corriendo en puerto " + this.port);
          resolve(this.server);
        });
        this.server.on("error", (err) => {
          reject(err);
        });
      });
    } catch (error) {
      console.error("Error al iniciar el servidor:", error);
      throw error;
    }
  }

  close() {
    if (this.server) {
      this.server.close();
    }
  }
}

module.exports = Server;
