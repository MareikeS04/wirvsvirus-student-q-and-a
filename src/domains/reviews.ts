import express, { Router } from 'express';
import getDb from '../database';

const reviewsController = Router();

reviewsController.post('/add', async (req, res) => {
    // Requested Json : {id, rating} 
    // userid -> UserID(Only Experts) 
    // star -> 0-5 Stars
    await (await getDb()).collection('userReviews').insertOne(req.body);
    res.json(req.body);
  });

reviewsController.get('/average/:id', async (req, res) => {
    // Requested Json : / 
    // Requests all Rating
    var id = parseInt(req.params.id);
    var average = 0;
    var count = 0;
    var reviews = await (await getDb()).collection('userReviews').find({userid: id}).forEach((Obj) => {
        average += Obj.star;
        count++;
    });
    res.send({avg: average, count: count});
});


export default reviewsController;