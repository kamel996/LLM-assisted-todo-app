import express, { Application } from 'express';
import taskRoutes from './routes/taskRoutes';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', taskRoutes);

export default app;

if (process.env.NODE_ENV !== 'test') {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  process.on('SIGINT', () => {
    console.log('SIGINT received: Closing server...');
    server.close(() => {
      console.log('Server closed.');
      process.exit(0);
    });
  });
}
