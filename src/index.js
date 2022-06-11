import express from "express";
import "dotenv/config";
import database from "./config/database";
import Router from "./routes/routes";
const app = express();

database 
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully!!");
    })
    .catch((err) => console.error("Unable to connect to the database:", err));

database
    .sync()
    .then(() => {
        console.log("All tables are created successfully");
    })
    .catch((err) => console.error("unable to create tables",err));

app.use("/", Router);
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.listen(process.env.PORT || 3000 , () => {
    console.log(`Connected and listing ${process.env.PORT}`)
})