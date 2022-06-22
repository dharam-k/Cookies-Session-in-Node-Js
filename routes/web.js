import express from 'express'
import { clearCookiesValue, getCookiesValue, setCookiesValue } from '../controllers/cookiesOperation.js';
const router = express.Router();


router.get('/cookieSet', setCookiesValue)
router.get('/cookieGet', getCookiesValue)
router.get('/cookieClear', clearCookiesValue)


export default router;