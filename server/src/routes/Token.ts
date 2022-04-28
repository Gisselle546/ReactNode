import {Router} from 'express';
import {createToken} from '../controllers/Token';

const router: Router = Router();

router.get("/createtoken", createToken);


export default router;