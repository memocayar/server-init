const express = require("express");
//const db = require("./db/conexion");
const cors = require("cors");
const { router } = require("./presentation/routes/index");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
/*     try {
      await db.authenticate();
      // db.sync({ force: true })
      console.log("DB online");
    } catch (error) {
      console.error("No se pudo conectar a la DB");
      throw error;
    } */
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json({ limit: "50mb" }));
  }

  routes() {
    this.app.use(router);
  }

  listen() {
    this.server = this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }

  close() {
    if (this.server) {
      this.server.close();
    }
  }
}

module.exports = Server;
