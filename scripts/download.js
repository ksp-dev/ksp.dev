const https = require("https");
const fs = require("fs");

const FILE = "src/data/resume.json";
const URL = "https://api.github.com/gists/e2d526d3cd8dc0381b014cdbaef10a8a";

const request = https
  .get(
    URL,
    {
      headers: {
        "User-Agent": "ksp.dev",
      },
    },
    (res) => {
      let body = "";

      res.on("data", (chunk) => {
        body += chunk;
      });

      res.on("end", () => {
        try {
          const json = JSON.parse(body);

          fs.writeFile(FILE, json.files["resume.json"].content, (err) => {
            if (err) {
              throw err;
            }
          });
        } catch (error) {
          console.error(error.message);
        }
      });
    }
  )
  .on("error", (error) => {
    console.error(error);
  });
