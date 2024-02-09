const { Router } = require("express")
const {get,
        create} = require("./../controllers/postController.js")

const router = Router();

router.get("/", get);
router.post("/", create)

module.exports = router