import express from "express";
import User from "../Controllers/User.js"

const router = express.Router();


router.post('/signup',User.signup)
router.post('/signin',User.signin)
router.get('/list',User.userList)

export default router;