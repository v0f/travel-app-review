// import path from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
// import { serve, setup } from 'swagger-ui-express';
// import YAML from 'yamljs';

import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import errorMiddleware from './middleware/error-middleware';
import requestLogMiddleware from './middleware/request-logger';

// Routers
import countryRouter from './modules/countries/country.router';
import placeRouter from './modules/places/place.router';
import userRouter from './modules/users/user.router';

const app = express();
// const swaggerDoc = YAML.load(path.join(__dirname, './docs/doc.yaml'));

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(requestLogMiddleware);

app.use('/favicon.ico', (req, res) => res.sendStatus(StatusCodes.NO_CONTENT));
// app.use('/docs', serve, setup(swaggerDoc));

app.use('/countries', countryRouter);
app.use('/places', placeRouter);
app.use('/users', userRouter);

app.use((req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).send(ReasonPhrases.NOT_IMPLEMENTED);
});

app.use(errorMiddleware);

export default app;
