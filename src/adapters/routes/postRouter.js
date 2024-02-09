const { Router } = require("express")
const { create } = require("./../controllers/postController")

const router = Router();

router.post("/", create)

module.exports = {router}