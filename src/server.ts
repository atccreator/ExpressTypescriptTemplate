import express from "express";

const app = express();
const PORT = 3000; // Here typescript infers the type of PORT as number implicitly
// const PORT: number = 3000; // You can also explicitly define the type

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});