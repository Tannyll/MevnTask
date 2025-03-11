const express = require("express")
const helmet = require("helmet")
const config = require("./config")
const loaders = require("./loaders")
const {AppointmentRoutes, HomeRoutes, UserRoutes} = require("./routes")
const {error} = require("winston");
const errorHandler = require("./middlewares/errorHandler");
const cors = require('cors')

config();
loaders();
const app = express();
app.use(express.json());
app.use(helmet());
const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `example.com`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
};

app.use(cors({credentials: true, origin: true}));

app.listen(process.env.APPPORT, () => {
    console.log(`Server is running \nhttp://localhost:${process.env.APPPORT}`);

    app.use("/", HomeRoutes);
    app.use("/api/appointments", AppointmentRoutes);
    app.use("/api/users", UserRoutes);

    app.use((req,res,next) => {
        const err = new Error("Not Found");
        error.status = 404;
        next(err);
    });
    
    app.use(errorHandler);


})

module.exports = app;