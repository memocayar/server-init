// Importación dinámica de las rutas
const Router = require("express");
const {readdirSync} = require("fs")

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName) => {
  const file = fileName.split(".").shift();
  return file;
  
};

(async () => {
  const files = readdirSync(PATH_ROUTER);

  for (const fileName of files) {
    const cleanName = cleanFileName(fileName);

    if (cleanName !== "index") {
      const moduleRouter = await import(`./${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    }
  }
})();

module.exports =  { router };