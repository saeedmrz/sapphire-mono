import express from "express";
import fs from "fs/promises";
import path from "path";

interface Cell {
  id: string;
  content: string;
  type: "text" | "code";
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  // This is our body parsing middleware, we can only access body if we parse it
  // before it shows up inside request handler
  router.use(express.json());

  const fullPath = path.join(dir, filename);

  router.get("/cells", async (req, res) => {
    try {
      // Read the file
      const result = await fs.readFile(fullPath, { encoding: "utf-8" });
      res.send(JSON.parse(result));
    } catch (error: any) {
      // If read throws error
      // Inspect the error, see if it says that the file doesn't exist
      // Parse a list of cells out of it
      // Send list of cells back to browser
      // ENOENT (error no entity => that file doesnt exist)
      if (error.code === "ENOENT") {
        // Add code to create a file and add default cells
        await fs.writeFile(fullPath, "[]", "utf-8");
        res.send([]);
      } else {
        throw error;
      }
    }
  });

  router.post("/cells", async (req, res) => {
    // Whenever we write a file into hard drive using this function inside fs
    // module, if that file doesn't exist it'll be created for us automatically
    // Take the list of cells from the request obj
    // Seralize them (turn them to a format that can be safely written to that file)
    const { cells }: { cells: Cell[] } = req.body;
    // Write the cells into the file
    await fs.writeFile(fullPath, JSON.stringify(cells), "utf-8");

    res.send({ status: "ok" });
  });

  return router;
};
