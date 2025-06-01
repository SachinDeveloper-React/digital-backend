import { NextFunction, Request, Response } from 'express'
import * as MenuService from '../services/menu.service'
import { errorResponse, successResponse } from '../utils/response'

export const getMenus = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const menus = await MenuService.getAllMenus()
    successResponse(res, menus, 'Menus fetched successfully')
    return
  } catch (error: any) {
    errorResponse(res, error.message || 'Failed to fetch menus', 500, 'GET_MENUS_ERROR')
    return
  }
}

export const createMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const created = await MenuService.createNewMenu(req.body)
    successResponse(res, created, 'Menu created successfully', 201)
    return
  } catch (error: any) {
    errorResponse(res, error.message || 'Failed to create menu', 500, 'CREATE_MENU_ERROR')
    return
  }
}

export const updateMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updated = await MenuService.updateMenuById(req.params.id, req.body)
    if (!updated) {
      errorResponse(res, 'Menu not found', 404, 'MENU_NOT_FOUND')
      return
    }
    successResponse(res, updated, 'Menu updated successfully')
    return
  } catch (error: any) {
    errorResponse(res, error.message || 'Failed to update menu', 500, 'UPDATE_MENU_ERROR')
    return
  }
}

export const deleteMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const deleted = await MenuService.deleteMenuById(req.params.id)
    if (!deleted) {
      errorResponse(res, 'Menu not found', 404, 'MENU_NOT_FOUND')
      return
    }
    successResponse(res, { message: 'Menu deleted' }, 'Menu deleted successfully')
    return
  } catch (error: any) {
    errorResponse(res, error.message || 'Failed to delete menu', 500, 'DELETE_MENU_ERROR')
    return
  }
}
