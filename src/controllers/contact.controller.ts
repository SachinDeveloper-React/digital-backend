import { Request, Response } from 'express'
import * as contactService from '../services/contact.service'
import { errorResponse, successResponse } from '../utils/response'
import { CustomerContact } from '../models/customerContact.model'

const ERROR_CODE = 'CONTACT_OPERATION_ERROR'

export const createContact = async (req: Request, res: Response) => {
  try {
    const contact = await contactService.createContact({
      title: req.body.title,
      data: req.body.data,
      iconPath: req.body.iconPath,
      iconContent: req.body.iconContent
    })

    successResponse(res, contact, 'Contact created successfully', 201)
    return
  } catch (error: any) {
    errorResponse(res, error.message, 500, ERROR_CODE)
    return
  }
}

export const getContacts = async (_: Request, res: Response) => {
  try {
    const contacts = await contactService.getAllContacts()
    successResponse(res, contacts, 'Contacts fetched successfully')
    return
  } catch (error: any) {
    errorResponse(res, error.message, 500, ERROR_CODE)
    return
  }
}

export const updateContact = async (req: Request, res: Response) => {
  try {
    const contact = await contactService.updateContact(req.params.id, {
      title: req.body.title,
      data: req.body.data,
      iconPath: req.body.iconPath,
      iconContent: req.body.iconContent
    })

    successResponse(res, contact, 'Contact updated successfully')
    return
  } catch (error: any) {
    errorResponse(res, error.message, 500, ERROR_CODE)
    return
  }
}

export const deleteContact = async (req: Request, res: Response) => {
  try {
    await contactService.deleteContact(req.params.id)
    successResponse(res, {}, 'Contact deleted successfully')
    return
  } catch (error: any) {
    errorResponse(res, error.message, 500, ERROR_CODE)
    return
  }
}

export const createCustomerContact = async (req: Request, res: Response) => {
  try {
    const newContact = await CustomerContact.create(req.body)

    successResponse(res, newContact, 'Customer contact created successfully', 201)
    return
  } catch (error: any) {
    errorResponse(res, error.message, 500, ERROR_CODE)
    return
  }
}
export const getCustomerContact = async (req: Request, res: Response) => {
  try {
    const newContact = await CustomerContact.find()

    successResponse(res, newContact, 'Customer contact created successfully', 200)
    return
  } catch (error: any) {
    errorResponse(res, error.message, 500, ERROR_CODE)
    return
  }
}
