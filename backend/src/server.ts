import express from 'express';
import axios from 'axios';
import routes from './routes';

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

export default app;
