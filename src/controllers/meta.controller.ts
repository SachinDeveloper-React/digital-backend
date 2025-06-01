import { Request, Response, NextFunction } from 'express'
import { successResponse, errorResponse } from '../utils/response'
import {
  createMeta,
  deleteMetaById,
  getAllMeta,
  getMetabypage,
  updateMetaById
} from '../services/meta.service'

export const getAllMetaByPage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const meta = await getAllMeta()

    if (!meta) {
      errorResponse(res, 'Meta data not found', 404, 'META_NOT_FOUND')
      return
    }

    successResponse(res, meta, 'Meta data fetched successfully')
  } catch (error: any) {
    errorResponse(res, error.message || 'Failed to fetch meta data', 500, 'META_FETCH_ERROR')
  }
}
export const getMetaByPage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { page } = req.params
    const meta = await getMetabypage(page)

    if (!meta) {
      errorResponse(res, 'Meta data not found', 404, 'META_NOT_FOUND')
      return
    }

    successResponse(res, meta, 'Meta data fetched successfully')
  } catch (error: any) {
    errorResponse(res, error.message || 'Failed to fetch meta data', 500, 'META_FETCH_ERROR')
  }
}

export const createMetaByPage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { page, title, description, keywords, faviconUrl } = req.body

    const existingMeta = await getMetabypage(page)

    if (existingMeta) {
      errorResponse(res, 'Meta already exists for this page', 409, 'META_ALREADY_EXISTS')
      return
    }

    const meta = await createMeta({ page, title, description, keywords, faviconUrl })

    successResponse(res, meta, 'Meta data saved successfully', 201)
  } catch (error: any) {
    errorResponse(res, error.message || 'Failed to fetch meta data', 500, 'META_FETCH_ERROR')
  }
}

export const updateMetaDataById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updated = await updateMetaById(req.params.id, req.body)
    if (!updated) {
      errorResponse(res, 'Meta not found', 404, 'META_NOT_FOUND')
      return
    }
    successResponse(res, updated, 'Meta updated successfully')
    return
  } catch (error: any) {
    errorResponse(res, error.message || 'Failed to update meta', 500, 'UPDATE_META_ERROR')
    return
  }
}

export const deleteMetaDataById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const deleted = await deleteMetaById(req.params.id)

    if (!deleted) {
      errorResponse(res, 'Meta not found', 404, 'META_NOT_FOUND')
      return
    }

    successResponse(res, deleted, 'Meta deleted successfully')
  } catch (error: any) {
    errorResponse(res, error.message || 'Failed to delete meta', 500, 'DELETE_META_ERROR')
  }
}
