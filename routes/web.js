import express from 'express'
import { clearCookiesValue, getCookiesValue, setCookiesValue } from '../controllers/cookiesOperation.js';
import { deleteSessionInfo, setSessionData, getSessionInfo, getSessionData } from '../controllers/sessionOperation.js';
const router = express.Router();

//cookies
router.get('/cookieSet', setCookiesValue)
router.get('/cookieGet', getCookiesValue)
router.get('/cookieClear', clearCookiesValue)

//session
router.get('/sessionInfo', getSessionInfo)
router.get('/deleteSessionInfo', deleteSessionInfo)
router.get('/setSessionData', setSessionData)
router.get('/getSessionData', getSessionData)


export default router;