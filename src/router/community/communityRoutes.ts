import express from 'express'
import { createCommunity, fetchAllCommunity, updateCommunity } from '../../controllers/communityController'
import passport from 'passport'
import validator from '../../helpers/validator';
import communitySchema from './communitySchema';

const router = express.Router();

router.use(passport.authenticate("jwt", { session: false }));
router.post("/new", validator(communitySchema.new), createCommunity);
router.get("/fetchAll", fetchAllCommunity);
router.patch("/update/:id", validator(communitySchema.update), updateCommunity)

export default router;