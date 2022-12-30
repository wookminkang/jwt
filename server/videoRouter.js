// videoRouter.js

import express from "express";
import { handleWatch, handleDelete, handleEdit, handleUpload } from "./videoController";

const videoRouter = express.Router();

videoRouter.get("/:id", handleWatch);
videoRouter.get("/:id/edit", handleEdit);
videoRouter.get("/:id/delete", handleDelete);
videoRouter.get("upload", handleUpload);

export default videoRouter