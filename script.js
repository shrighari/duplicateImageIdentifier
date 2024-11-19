const { ipcRenderer } = require("electron");

document.getElementById("chooseFolders").addEventListener("click", () => {
  ipcRenderer.invoke("select-folders").then((result) => {
    if (result) {
      document.getElementById("output").innerText = "Processing...";
      ipcRenderer.invoke("process-folders", result).then((output) => {
        document.getElementById("output").innerText = output;
      });
    }
  });
});
