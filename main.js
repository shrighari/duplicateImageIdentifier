const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadFile("index.html");
});

ipcMain.handle("select-folders", async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ["openDirectory", "multiSelections"],
  });
  return result.filePaths;
});

ipcMain.handle("process-folders", async (event, folderPaths) => {
  let hashes = new Map();
  let duplicates = [];

  for (const folder of folderPaths) {
    const files = fs.readdirSync(folder);

    for (const file of files) {
      const filePath = path.join(folder, file);
      if (fs.statSync(filePath).isFile() && isImage(filePath)) {
        const hash = hashFile(filePath);
        if (hashes.has(hash)) {
          const duplicateName = path.join(
            folder,
            `Duplicate_${duplicates.length + 1}${path.extname(file)}`
          );
          fs.renameSync(filePath, duplicateName);
          duplicates.push(duplicateName);
        } else {
          hashes.set(hash, filePath);
        }
      }
    }
  }

  return duplicates.length
    ? `Found and renamed ${duplicates.length} duplicate(s):\n` +
        duplicates.join("\n")
    : "No duplicates found.";
});

function hashFile(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  return crypto.createHash("md5").update(fileBuffer).digest("hex");
}

function isImage(filePath) {
  const extensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp"];
  return extensions.includes(path.extname(filePath).toLowerCase());
}
