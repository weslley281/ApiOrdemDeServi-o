import { app } from '.';

const port = 5000;

app.listen(port, () =>
  console.log(`The applicatition is running on http://localhost:${port}`)
);
