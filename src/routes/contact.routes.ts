//
import express from 'express'
import {
  contactCustomerValidationSchema,
  contactValidationSchema
} from '../validations/contact.validation'
import { validateBody } from '../middlewares/validate'
import {
  createContact,
  createCustomerContact,
  deleteContact,
  getContacts,
  getCustomerContact,
  updateContact
} from '../controllers/contact.controller'
const router = express.Router()

router.get('/', getContacts)
router.post('/', validateBody(contactValidationSchema), createContact)
router.put('/:id', validateBody(contactValidationSchema), updateContact)
router.delete('/:id', deleteContact)
router.post('/customer', validateBody(contactCustomerValidationSchema), createCustomerContact)
router.get('/customer', getCustomerContact)

export default router
