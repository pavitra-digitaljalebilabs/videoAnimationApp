const Creatomate = require("creatomate");
const express = require("express");
const cors = require("cors"); // Add this line

const app = express();
const port = 3000;

const client = new Creatomate.Client(
  "a21f43a729ab4692b6bbc7fe490137a8818e9655b7cda360d797a7796bde94236ce53ce1a9255154ab04e61a875f57ec"
);

app.use(express.json());
app.use(cors()); // Add this line

app.post("/video", async (req, res) => {
  const modifications = req.body;
  if (!modifications) {
    return res.status(400).json({ error: "Modifications not provided" });
  }
  client
    .render({
      templateId: "e39859da-8a1f-4759-a01a-c4ec53dff384",
      modifications: { ...req.body },
    })
    .then((render) => {
        console.log(render);
      return res.json(render[0].url);
    });
});
app.get("/", async (req, res) => {
    res.json("hello world")
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
