import express, { Router } from 'express';
import questionsController from './domains/questions';
import reviewsController from './domains/reviews';

const api = Router();

api.use(express.json());
api.use('/questions', questionsController);
api.use('/reviews', reviewsController);

export default api;
