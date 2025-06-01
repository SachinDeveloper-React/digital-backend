import express from 'express'
import {
  createBanner,
  deleteBanner,
  getBanners,
  updateBanner
} from '../controllers/banner.controller'
import { validateBody } from '../middlewares/validate'
import { bannerValidationSchema } from '../validations/banner.validation'

const router = express.Router()

router.get('/', getBanners)
router.post('/', validateBody(bannerValidationSchema), createBanner)
router.put('/:id', validateBody(bannerValidationSchema), updateBanner)
router.delete('/:id', deleteBanner)

export default router
