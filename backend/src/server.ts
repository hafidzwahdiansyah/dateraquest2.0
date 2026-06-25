import app from './app';
import { sequelize } from './models';
import dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env['PORT'] ?? 3000);

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
}

start();
