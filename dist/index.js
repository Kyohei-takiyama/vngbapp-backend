"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// ECS will run the app on port 80
const port = 80;
app.get("/", (req, res) => {
    res.send("Hello World!!!!!!!!!!! modified by me!!");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
