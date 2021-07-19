const express = require("express");

const router = express.Router();

const series = [
  {
    id: 1,
    nome: "Game Of Thrones",
  },
  {
    id: 2,
    nome: "The Flash",
  },
  {
    id: 3,
    nome: "Super-girl",
  },
  {
    id: 4,
    nome: "Gotham",
  },
  {
    id: 5,
    nome: "DC",
  },
];

router.get("/ver", (req, res) => {
  res.send(series);
});

router.get("/ver/:id", (req, res) => {
  let { id } = req.params;

  const foundSeries = series.find((serie) => {
    return serie.id == id;
  });

  res.send(foundSeries);
});

module.exports = router;
