import express from 'express'
import {
  createMetaByPage,
  deleteMetaDataById,
  getAllMetaByPage,
  getMetaByPage,
  updateMetaDataById
} from '../controllers/meta.controller'
import { validateBody } from '../middlewares/validate'
import { metaValidationSchema } from '../validations/meta.validation'

const router = express.Router()

router.get('/', getAllMetaByPage)
router.get('/:page', getMetaByPage)
router.post('/', validateBody(metaValidationSchema), createMetaByPage)
router.put('/:id', validateBody(metaValidationSchema), updateMetaDataById)
router.delete('/:id', deleteMetaDataById)

export default router
