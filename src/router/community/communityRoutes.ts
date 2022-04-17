import express from 'express'
import { createCommunity } from '../../controllers/communityController'
import passport from 'passport'

const router = express.Router();

router.use(passport.authenticate("jwt", { session: false }));
router.post("/new", createCommunity);

export default router;