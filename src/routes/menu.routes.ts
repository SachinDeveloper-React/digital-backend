import express from 'express'
import { createMenu, deleteMenu, getMenus, updateMenu } from '../controllers/menu.controller'
import { validateBody } from '../middlewares/validate'
import { menuSchema } from '../validations/menu.validation'

const router = express.Router()

router.get('/', getMenus)
router.post('/', validateBody(menuSchema), createMenu)
router.put('/:id', validateBody(menuSchema), updateMenu)
router.delete('/:id', deleteMenu)

export default router
