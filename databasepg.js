const { Pool } = require("pg");
const env = process.env;

const config = {
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
};

const pool = new Pool(config);

async function query(query, params) {
  const { rows, fields } = await pool.query(query, params);

  return rows;
}

/* DataSchema.DiseaseType table */

const getDiseaseTypes = async (request, response) => {
  const result = await query("SELECT * FROM DataSchema.DiseaseType");

  response.status(200).json(result);
};

const deleteDiseaseType = async (request, response) => {
  const result = await query(
    "DELETE FROM DataSchema.DiseaseType WHERE DataSchema.DiseaseType.id = $1",
    [request.params.id]
  );

  response.status(200).json(result);
};

const createDiseaseType = async (request, response) => {
  const result = await query(
    "INSERT INTO DataSchema.DiseaseType VALUES($1, $2)",
    [request.body.id, request.body.description]
  );

  response.status(200).json(result);
};

const updateDiseaseType = async (request, response) => {
  const result = await query(
    "UPDATE DataSchema.DiseaseType SET description = $1 WHERE id = $2",
    [request.body.description, request.body.id]
  );

  response.status(200).json(result);
};

/* DataSchema.Country table */

const getCountries = async (request, response) => {
  const result = await query("SELECT * FROM DataSchema.Country");

  response.status(200).json(result);
};

const deleteCountry = async (request, response) => {
  const result = await query(
    "DELETE FROM DataSchema.Country WHERE DataSchema.Country.cname = $1",
    [request.params.cname]
  );

  response.status(200).json(result);
};

const createCountry = async (request, response) => {
  const result = await query("INSERT INTO DataSchema.Country VALUES($1, $2)", [
    request.body.cname,
    request.body.population,
  ]);

  response.status(200).json(result);
};

const updateCountry = async (request, response) => {
  const result = await query(
    "UPDATE DataSchema.Country SET population = $1 WHERE cname = $2",
    [request.body.population, request.body.cname]
  );

  response.status(200).json(result);
};

/* DataSchema.Disease table */

const getDiseases = async (request, response) => {
  const result = await query("SELECT * FROM DataSchema.Disease");

  response.status(200).json(result);
};

const deleteDisease = async (request, response) => {
  const result = await query(
    "DELETE FROM DataSchema.Disease WHERE DataSchema.Disease.disease_code = $1",
    [request.params.disease_code]
  );

  response.status(200).json(result);
};

const createDisease = async (request, response) => {
  const result = await query(
    "INSERT INTO DataSchema.Disease VALUES($1, $2, $3, $4)",
    [
      request.body.disease_code,
      request.body.pathogen,
      request.body.description,
      request.body.id,
    ]
  );

  response.status(200).json(result);
};

const updateDisease = async (request, response) => {
  const result = await query(
    "UPDATE DataSchema.Disease SET pathogen = $1, description = $2, id = $3 WHERE disease_code = $4",
    [
      request.body.pathogen,
      request.body.description,
      request.body.id,
      request.body.disease_code,
    ]
  );

  response.status(200).json(result);
};

/* DataSchema.Discover table */

const getDiscoveries = async (request, response) => {
  const result = await query("SELECT * FROM DataSchema.Discover");

  response.status(200).json(result);
};

const deleteDiscovery = async (request, response) => {
  const result = await query(
    "DELETE FROM DataSchema.Discover WHERE DataSchema.Discover.id_s = $1",
    [request.params.id_s]
  );

  response.status(200).json(result);
};

const createDiscovery = async (request, response) => {
  const result = await query(
    "INSERT INTO DataSchema.Discover(cname, disease_code, first_enc_date) VALUES($1, $2, $3)",
    [request.body.cname, request.body.disease_code, request.body.first_enc_date]
  );

  response.status(200).json(result);
};

const updateDiscovery = async (request, response) => {
  const result = await query(
    "UPDATE DataSchema.Discover SET cname = $1, disease_code = $2, first_enc_date = $3 WHERE id_s = $4",
    [
      request.body.cname,
      request.body.disease_code,
      request.body.first_enc_date,
      request.body.id_s,
    ]
  );

  response.status(200).json(result);
};

/* DataSchema.Users table */

const getUsers = async (request, response) => {
  const result = await query("SELECT * FROM DataSchema.Users");

  response.status(200).json(result);
};

const deleteUser = async (request, response) => {
  const result = await query(
    "DELETE FROM DataSchema.Users WHERE DataSchema.Users.email = $1",
    [request.params.email]
  );

  response.status(200).json(result);
};

const createUser = async (request, response) => {
  const result = await query(
    "INSERT INTO DataSchema.Users VALUES($1, $2, $3, $4, $5, $6)",
    [
      request.body.email,
      request.body.name,
      request.body.surname,
      request.body.salary,
      request.body.phone,
      request.body.cname,
    ]
  );

  response.status(200).json(result);
};

const updateUser = async (request, response) => {
  const result = await query(
    "UPDATE DataSchema.Users SET name = $1, surname = $2, salary = $3, phone = $4, cname = $5 WHERE email = $6",
    [
      request.body.name,
      request.body.surname,
      request.body.salary,
      request.body.phone,
      request.body.cname,
      request.body.email,
    ]
  );

  response.status(200).json(result);
};

/* DataSchema.PublicServant table */

const getPublicServants = async (request, response) => {
  const result = await query("SELECT * FROM DataSchema.PublicServant");

  response.status(200).json(result);
};

const deletePublicServant = async (request, response) => {
  const result = await query(
    "DELETE FROM DataSchema.PublicServant WHERE DataSchema.PublicServant.email = $1",
    [request.params.email]
  );

  response.status(200).json(result);
};

const createPublicServant = async (request, response) => {
  const result = await query(
    "INSERT INTO DataSchema.PublicServant VALUES($1, $2)",
    [request.body.email, request.body.department]
  );

  response.status(200).json(result);
};

const updatePublicServant = async (request, response) => {
  const result = await query(
    "UPDATE DataSchema.PublicServant SET department = $1 WHERE email = $2",
    [request.body.department, request.body.email]
  );

  response.status(200).json(result);
};

/* DataSchema.Doctor table */

const getDoctors = async (request, response) => {
  const result = await query("SELECT * FROM DataSchema.Doctor");

  response.status(200).json(result);
};

const deleteDoctor = async (request, response) => {
  const result = await query(
    "DELETE FROM DataSchema.Doctor WHERE DataSchema.Doctor.email = $1",
    [request.params.email]
  );

  response.status(200).json(result);
};

const createDoctor = async (request, response) => {
  const result = await query("INSERT INTO DataSchema.Doctor VALUES($1, $2)", [
    request.body.email,
    request.body.degree,
  ]);

  response.status(200).json(result);
};

const updateDoctor = async (request, response) => {
  const result = await query(
    "UPDATE DataSchema.Doctor SET degree = $1 WHERE email = $2",
    [request.body.degree, request.body.email]
  );

  response.status(200).json(result);
};

/* DataSchema.Specialize table */

const getSpecializations = async (request, response) => {
  const result = await query("SELECT * FROM DataSchema.Specialize");

  response.status(200).json(result);
};

const deleteSpecialize = async (request, response) => {
  const result = await query(
    "DELETE FROM DataSchema.Specialize WHERE DataSchema.Specialize.id_s = $1",
    [request.params.id_s]
  );

  response.status(200).json(result);
};

const createSpecialize = async (request, response) => {
  const result = await query(
    "INSERT INTO DataSchema.Specialize(id, email) VALUES($1, $2)",
    [request.body.id, request.body.email]
  );

  response.status(200).json(result);
};

const updateSpecialize = async (request, response) => {
  const result = await query(
    "UPDATE DataSchema.Specialize SET id = $1, email = $2  WHERE id_s = $3",
    [request.body.id, request.body.email, request.body.id_s]
  );

  response.status(200).json(result);
};

/* DataSchema.Record table */

const getRecords = async (request, response) => {
  const result = await query("SELECT * FROM DataSchema.Record");

  response.status(200).json(result);
};

const deleteRecord = async (request, response) => {
  const result = await query(
    "DELETE FROM DataSchema.Record WHERE DataSchema.Record.id_s = $1",
    [request.params.id_s]
  );

  response.status(200).json(result);
};

const createRecord = async (request, response) => {
  const result = await query(
    "INSERT INTO DataSchema.Record(email, cname, disease_code, total_deaths, total_patients) VALUES($1, $2, $3, $4, $5)",
    [
      request.body.email,
      request.body.cname,
      request.body.disease_code,
      request.body.total_deaths,
      request.body.total_patients,
    ]
  );

  response.status(200).json(result);
};

const updateRecord = async (request, response) => {
  const result = await query(
    "UPDATE DataSchema.Record SET email = $1, cname = $2, disease_code = $3, total_deaths = $4, total_patients = $5 WHERE id_s = $6",
    [
      request.body.email,
      request.body.cname,
      request.body.disease_code,
      request.body.total_deaths,
      request.body.total_patients,
      request.body.id_s,
    ]
  );

  response.status(200).json(result);
};

module.exports = {
  getCountries,
  deleteCountry,
  createCountry,
  updateCountry,
  getDiseaseTypes,
  deleteDiseaseType,
  createDiseaseType,
  updateDiseaseType,
  getDiseases,
  deleteDisease,
  createDisease,
  updateDisease,
  getDiscoveries,
  deleteDiscovery,
  createDiscovery,
  updateDiscovery,
  getUsers,
  deleteUser,
  createUser,
  updateUser,
  getPublicServants,
  deletePublicServant,
  createPublicServant,
  updatePublicServant,
  getDoctors,
  deleteDoctor,
  createDoctor,
  updateDoctor,
  getSpecializations,
  deleteSpecialize,
  createSpecialize,
  updateSpecialize,
  getRecords,
  deleteRecord,
  createRecord,
  updateRecord,
};
