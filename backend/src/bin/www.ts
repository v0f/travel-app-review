import app from '../app';
import { DEV_PORT } from '../common/config';
import { connectToDB } from '../common/db/mongodb';

const port = process.env.PORT || DEV_PORT;

app.listen(port, () =>
  console.log(`server listening at http://localhost:${port}`)
);

connectToDB();
