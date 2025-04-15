require("dotenv").config();
const express = require("express");
const cors = require("cors");
const wizardRoutes = require("./src/routes/wizardRoutes.js");
const houseRoutes = require("./src/routes/houseRoutes.js");
const reportRoutes = require("./src/routes/reportRoutes.js");
const path = require("path");


const app = express();
app.use(cors());
app.use(express.json());


app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Swagger
const setupSwagger = require('./src/config/swagger.js'); // Caminho até o arquivo
setupSwagger(app);


app.use("/api", wizardRoutes); 
app.use("/api", houseRoutes); 
app.use("/api", reportRoutes);


const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});