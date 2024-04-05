import express from "express";
import productsRouter from "./routes/productsRoutes.js";

const app = express();
const PORT = 3001;

app.use(express.json());

app.use("/products", productsRouter);

app.listen(PORT, err => {
  if (!err) {
    console.log(`Server is running on port ${PORT}`);
  } else {
    console.log("Error occured ", err);
  }
});
