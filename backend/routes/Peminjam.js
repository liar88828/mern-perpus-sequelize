const express = require("express");
const router = express.Router();
const {Peminjams} = require("../models");

//tampil
router.get("/", async (req, res) => {
    res.json(await Peminjams.findAll());
});
// kirim /menyimpan
router.post("/", async (req, res) => {
    res.json(await Peminjams.create(req.body));
});

// seleksi saat mau di edit
router.get("/:id", async (req, res) => {
    res.json(await Peminjams.findByPk(req.params.id));
});

// update / edit
router.put("/:id", async (req, res) => {
    res.json(await Peminjams.update(req.body,
        {where: {id_peminjamans: req.params.id}}));
});

//delete
router.delete("/:id", async (req, res) => {
    res.json(await Peminjams.destroy(
        {where: {id_peminjamans: req.params.id}}));
});

module.exports = router;
