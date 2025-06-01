import Menu from '../models/menu.model'

export const getAllMenus = () => Menu.find()

export const createNewMenu = (data: { label: string; link: string; submenu?: any[] }) =>
  new Menu(data).save()

export const findMenuById = (id: string) => Menu.findById(id)

export const updateMenuById = async (
  id: string,
  updates: { label?: string; link?: string; submenu?: any[] }
) => {
  const menu = await Menu.findById(id)
  if (!menu) return null

  menu.label = updates.label ?? menu.label
  menu.link = updates.link ?? menu.link
  menu.submenu = updates.submenu ?? (menu.submenu as any)

  return menu.save()
}

export const deleteMenuById = async (id: string) => {
  const menu = await Menu.findById(id)
  if (!menu) return null
  await menu.deleteOne()
  return menu
}
