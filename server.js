require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./databasepg");
const app = express();

app.use(cors());

app.use(express.json());

app.get("/disease-types", db.getDiseaseTypes);
app.delete("/disease-types/:id", db.deleteDiseaseType);
app.post("/disease-types", async (req, res, next) => {
  try {
    await db.createDiseaseType(req, res);
  } catch (err) {
    next(err);
  }
});
app.put("/disease-types", db.updateDiseaseType);

app.get("/countries", db.getCountries);
app.delete("/countries/:cname", db.deleteCountry);
app.post("/countries", async (req, res, next) => {
  try {
    await db.createCountry(req, res);
  } catch (err) {
    next(err);
  }
});
app.put("/countries", db.updateCountry);

app.get("/diseases", db.getDiseases);
app.delete("/diseases/:disease_code", db.deleteDisease);
app.post("/diseases", async (req, res, next) => {
  try {
    await db.createDisease(req, res);
  } catch (err) {
    next(err);
  }
});
app.put("/diseases", db.updateDisease);

app.get("/discoveries", db.getDiscoveries);
app.delete("/discoveries/:id_s", db.deleteDiscovery);
app.post("/discoveries", async (req, res, next) => {
  try {
    await db.createDiscovery(req, res);
  } catch (err) {
    next(err);
  }
});
app.put("/discoveries", db.updateDiscovery);

app.get("/users", db.getUsers);
app.delete("/users/:email", db.deleteUser);
app.post("/users", async (req, res, next) => {
  try {
    await db.createUser(req, res);
  } catch (err) {
    next(err);
  }
});
app.put("/users", db.updateUser);

app.get("/public-servants", db.getPublicServants);
app.delete("/public-servants/:email", db.deletePublicServant);
app.post("/public-servants", async (req, res, next) => {
  try {
    await db.createPublicServant(req, res);
  } catch (err) {
    next(err);
  }
});
app.put("/public-servants", db.updatePublicServant);

app.get("/doctors", db.getDoctors);
app.delete("/doctors/:email", db.deleteDoctor);
app.post("/doctors", async (req, res, next) => {
  try {
    await db.createDoctor(req, res);
  } catch (err) {
    next(err);
  }
});
app.put("/doctors", db.updateDoctor);

app.get("/specializations", db.getSpecializations);
app.delete("/specializations/:id_s", db.deleteSpecialize);
app.post("/specializations", async (req, res, next) => {
  try {
    await db.createSpecialize(req, res);
  } catch (err) {
    next(err);
  }
});
app.put("/specializations", db.updateSpecialize);

app.get("/records", db.getRecords);
app.delete("/records/:id_s", db.deleteRecord);
app.post("/records", async (req, res, next) => {
  try {
    await db.createRecord(req, res);
  } catch (err) {
    next(err);
  }
});
app.put("/records", db.updateRecord);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(5001, () => {
  console.log("Server started on port 5001");
});
