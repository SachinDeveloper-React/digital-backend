import { Request, Response } from 'express'
import * as BannerService from '../services/banner.service'
import { successResponse, errorResponse } from '../utils/response'

export const createBanner = async (req: Request, res: Response) => {
  try {
    const created = await BannerService.createBanner(req.body)
    successResponse(res, created, 'Banner created successfully', 201)
    return
  } catch (error: any) {
    errorResponse(res, error.message, 500, 'CREATE_BANNER_ERROR')
    return
  }
}

export const getBanners = async (_req: Request, res: Response) => {
  try {
    const banners = await BannerService.getAllBanners()
    successResponse(res, banners, 'Banners fetched successfully')
    return
  } catch (error: any) {
    errorResponse(res, error.message, 500, 'GET_BANNERS_ERROR')
    return
  }
}

export const updateBanner = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const updated = await BannerService.updateBannerById(id, req.body)
    if (!updated) {
      errorResponse(res, 'Banner not found', 404, 'BANNER_NOT_FOUND')
      return
    }

    successResponse(res, updated, 'Banner updated successfully')
    return
  } catch (error: any) {
    errorResponse(res, error.message, 500, 'UPDATE_BANNER_ERROR')
    return
  }
}

export const deleteBanner = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deleted = await BannerService.deleteBannerById(id)
    if (!deleted) {
      errorResponse(res, 'Banner not found', 404, 'BANNER_NOT_FOUND')
      return
    }
    successResponse(res, null, 'Banner deleted successfully')
    return
  } catch (error: any) {
    errorResponse(res, error.message, 500, 'DELETE_BANNER_ERROR')
    return
  }
}
