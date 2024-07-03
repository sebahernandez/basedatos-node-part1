import express from "express";
import db from "../database/config.js";

const router = express.Router();

// Ruta GET para obtener todos los posts
router.get("/", async (req, res) => {
  const query = "SELECT * FROM posts";
  try {
    const result = await db(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los posts" });
  }
});

// Ruta POST para agregar un nuevo post
router.post("/", async (req, res) => {
  const { titulo, img, descripcion, likes = 0 } = req.body;
  const query =
    "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *";
  const values = [titulo, img, descripcion, likes];

  try {
    const result = await db(query, values);
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar el post" });
  }
});

// Ruta PUT para actualizar los likes de un post
router.put("/like/:id", async (req, res) => {
  const { id } = req.params;
  const query = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
  const values = [id];

  try {
    const result = await db(query, values);

    if (result.length === 0) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar los likes" });
  }
});

// Ruta DELETE para eliminar un post
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM posts WHERE id = $1 RETURNING *";
  const values = [id];

  try {
    const result = await db(query, values);

    if (result.length === 0) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el post" });
  }
});

export default router;
