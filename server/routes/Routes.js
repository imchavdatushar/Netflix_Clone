import express from 'express';
import { addUser, getUser } from '../controller/User-controller.js';
import { likedMovie } from '../controller/LikedMovies-controller.js';




const route = express.Router();

route.post('/signup', addUser);
route.post('/login', getUser);

route.post('/mylist',likedMovie);

export default route;