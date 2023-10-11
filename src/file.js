import fs from "node:fs/promises";

export const createDir = (path) => {
  return new Promise((resolve) => {
    fs.mkdir(path)
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

export const createAndWriteFile = (path, payload) => {
  fs.appendFile(path, payload, { flag: "w" });
};
