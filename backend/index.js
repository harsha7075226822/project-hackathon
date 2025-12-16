import dotenv from "dotenv";
dotenv.config();

import { app } from "./src/config/app.js";
import { connection } from "./src/config/database.js";

// Import routes
import userRoutes from "./src/routes/userRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import eventRoutes from "./src/routes/eventRoutes.js";
import projectRoutes from "./src/routes/projectRoutes.js";
import applicationRoutes from "./src/routes/applicationRoutes.js";
import savedRoutes from "./src/routes/savedRoutes.js";
import publicRoutes from "./src/routes/publicRoutes.js";

// Use routes
app.use("/", userRoutes);
app.use("/", adminRoutes);
app.use("/", eventRoutes);
app.use("/", projectRoutes);
app.use("/", applicationRoutes);
app.use("/", savedRoutes);
app.use("/", publicRoutes);

// Start server
connection().then(() => {
  app.listen(5678, () => console.log("Server running at port 5678"));
});
