import express from 'express'
import { getHomepageData } from '../controllers/homepage.controller'

const router = express.Router()

router.get('/', getHomepageData)
export default router
