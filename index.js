import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Route pour que Render garde le bot allumé
app.get("/", (req, res) => {
  res.send("Bot always ON");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
