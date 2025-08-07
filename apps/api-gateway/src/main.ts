import express from 'express';
import cors from 'cors';
import { restaurants, cuisines } from './routes';

export const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.get('/health', (_req, res) => {
  res.json({ status: 'healthy' });
});

app.use('/api/restaurants', restaurants);
app.use('/api/cuisines', cuisines);

const port = process.env.PORT || 3333;

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
}
