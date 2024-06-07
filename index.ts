import express, { Request, Response } from "express";

const app = express();
// ECS will run the app on port 80
const port = 80;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!!!!!!!!!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
