import Contact from '../models/contact.model'

interface ContactInput {
  title: string
  data: string
  iconPath?: string
  iconContent?: string
}

export const createContact = async (data: ContactInput) => {
  const banner = new Contact(data)
  return banner.save()
}
export const getAllContacts = async (): Promise<ContactInput[]> => {
  return await Contact.find()
}

export const updateContact = async (
  id: string,
  { title, data, iconPath, iconContent }: ContactInput
): Promise<ContactInput> => {
  const updateData: Partial<ContactInput> = { title, data, iconPath, iconContent }

  const contact = await Contact.findByIdAndUpdate(id, updateData, {
    new: true
  })

  if (!contact) throw new Error('Contact not found')
  return contact
}

export const deleteContact = async (id: string): Promise<void> => {
  const contact = await Contact.findByIdAndDelete(id)
  if (!contact) throw new Error('Contact not found')
}
