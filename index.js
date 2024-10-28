const express = require("express");
const bodyParser = require("body-parser");
const cors = require ("cors");
const { connectDB } = require("./database/db");
const userRoute = require("./routes/user");
const PORT = 7000;

const app = express();

connectDB().then(() => {
    app.use(bodyParser.json());
    app.use(cors());
    app.use("/api/user", userRoute);

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
});
