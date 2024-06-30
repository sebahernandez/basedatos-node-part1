import express from "express";
import cors from "cors";
import postsRoutes from "../routes/post.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/posts", postsRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
