import { Router } from 'express';

import multer from 'multer';
import uploadConfig from './config/upload';

import SessionController from './controllers/SessionController';
import TimeController from './controllers/TimeController';

const routes = new Router();
const upload = multer(uploadConfig);

//user
routes.post('/sessions', SessionController.store);


//times
routes.get('/times', TimeController.index);
routes.get('/times/cod/:cod',TimeController.show_cod);
routes.get('/times/:id',TimeController.show);
routes.post('/times', upload.single('brasao'), TimeController.store);
routes.put('/times/:id', upload.single('brasao'), TimeController.update);
routes.delete('/times/:id', TimeController.delete);



export default routes;