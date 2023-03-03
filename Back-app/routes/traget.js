const express = require('express');
const tragetController= require('../controllers/traget.controller');

const router = express.Router();

router.post("/create",tragetController.create);
router.get("/:id",tragetController.getOne);
router.get("/tragets/:idProfile",tragetController.fetchAll);
router.get("/tragetsAge/:min/:max",tragetController.fetchAllByAge);
router.get("/tragetsSexe/:sexe",tragetController.fetchAllBySexe);
router.get("/tragetsDate/:dateDep/:dateArr",tragetController.fetchAllByDate);
router.get("/tragetsDS/:dateDep/:dateArr/:sexe",tragetController.fetchAllByDateSexe);
router.get("/tragetsAS/:min/:max/:sexe",tragetController.fetchAllByAgeSexe);
router.get("/tragetsAD/:min/:max/:dateDep/:dateArr",tragetController.fetchAllByAgeDate);
router.get("/tragetsADS/:min/:max/:dateDep/:dateArr/:sexe",tragetController.fetchAllByAgeDatesexe);
router.delete("/:idProfile/:id",tragetController.deleteTrajet);

module.exports = router;