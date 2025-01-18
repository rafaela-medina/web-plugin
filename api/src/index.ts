import app from "./shared/server";
import connectDB from "./infrastructure/database";
import logger from "./shared/logger";

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
      logger.info(`🚀 Server running on port ${PORT}`);
    });
  });

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
