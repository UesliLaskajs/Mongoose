const mongoose = require("mongoose");
const app = express();
const port = 8000; // You can choose any port you like

require("./config/moongose.connection")
app.use(express.json(), express.urlencoded({ extended: true }));

const apiRoutes = require("./routes/jokes.routes");
apiRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
