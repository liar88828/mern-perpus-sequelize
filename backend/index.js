const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const db = require("./models/index");


app.use(express.json());
app.use(cors());

//Router
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
// app.use("/comments", require("./routes/Comments"));

app.use("/anggota", require("./routes/Anggota"));
app.use("/buku", require("./routes/Buku"));
app.use("/peminjam", require("./routes/Peminjam"));
app.use("/peminjamDetail", require("./routes/PeminjamDetail"));

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(port + " running");
  });
});

// npx sequelize--help;--------------------
