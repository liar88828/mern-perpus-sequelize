const express = require("express");
const router = express.Router();
const {Anggotas} = require("../models");
//kurung kurawal harus sama pada models


//tampil ---//bisa
router.get("/", async (req, res) => {
    res.json(await Anggotas.findAll());
});

// kirim /menyimpan ---//bisa
router.post("/", async (req, res) => {
    const post = req.body;
    await Anggotas.create(post);
    res.json(post);
});


// seleksi saat mau di edit ---//bisa
router.get("/:id", async (req, res) => {
    res.json(await Anggotas.findByPk(req.params.id));
});


//delete
router.delete('/:id', async (req, res) => {
    await Anggotas.destroy(
        {where: {stb: req.params.id},});
    // stb bukan id karena stb kata kunci dari tabel
    res.json('delete successfully');
});


// update / edit
router.put("/:id", async (req, res) => {
    res.json(await
        Anggotas.update(req.body,
            {where: {stb: req.params.id}}));
});


module.exports = router;
