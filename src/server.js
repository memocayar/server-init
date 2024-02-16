const express = require("express");
require("dotenv/config");
const cors = require("cors");
const database = require("./frameworks/sequelize");

//TODO: importación dinámica de rutas 
//const { router } = require("./adapters/routes/index");

class Server {
  constructor() {
    try {
      this.app = express();
      this.port = process.env.PORT || "8000";

      this.dbConnection();
      this.middlewares();
      this.routes();
    } catch (error) {
      console.error("Error building server:", error);
      throw error;
    }
  }

  async dbConnection() {
    try{
      await database.authenticate();
      // database.sync({ force: true })
      console.log("Data base online");
    } catch (error){
      console.error("Error connecting to database::", error);
      throw error;
    }
  }

  middlewares() {
    try {
      this.app.use(cors());
      this.app.use(express.json({ limit: "50mb" }));
    } catch (error) {
      console.error("Error configuring middlewares:", error);
      throw error;
    }
  }

  routes() {
    try {
      this.app.use("/api/post", require("./adapters/routes/postRouter"));
      //this.app.use(router);
    } catch (error) {
      console.error("Error configuring routes:", error);
      throw error;
    }
  }

  async listen() {
    try {
      this.server = await new Promise((resolve, reject) => {
        this.server = this.app.listen(this.port, () => {
          console.log("Server running on port " + this.port);
          resolve(this.server);
        });
        this.server.on("error", (err) => {
          reject(err);
        });
      });
    } catch (error) {
      console.error("Error starting server:", error);
      throw error;
    }
  }

  close() {
    if (this.server) {
      database.close();
      this.server.close();
    }
  }
}

module.exports = Server;