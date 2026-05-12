import express from "express";
import fs from "node:fs";

const app = express();
const PORT = 3000;


const data = fs.readFileSync("./cities.json", "utf-8");
const cities = JSON.parse(data).localidades;


app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "API de localidades de Buenos Aires",
    endpoints: {
      todas: "/localidades",
      porId: "/localidades/:id",
      buscar: "/localidades/buscar?nombre=adro",
      buscar: "/localidades/buscar?nombre=Almirante%20Brown",
    },
  });
});


app.get("/localidades", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Listado completo de localidades",
    data: cities,
  });
});


app.get("/localidades/buscar", (req, res) => {
  const nombre = req.query.nombre;

  const results = cities.filter((c) =>
    c.nombre.toLowerCase().includes(nombre.toLowerCase()),
  );

  if (results.length) {
    res.status(200).json({
      status: 200,
      message: "Resultados encontrados",
      data: results,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "No se encontraron localidades",
    });
  }
});


app.get("/localidades/:id", (req, res) => {
  const id = req.params.id;

  const city = cities.find((c) => c.id == id);

  if (city) {
    res.status(200).json({
      status: 200,
      message: "Localidad encontrada",
      data: city,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "Localidad no encontrada",
    });
  }
});



app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Ruta inexistente",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
