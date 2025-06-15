import { Schema, model } from 'mongoose'

const customerContactSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

export const CustomerContact = model('CustomerContact', customerContactSchema)
