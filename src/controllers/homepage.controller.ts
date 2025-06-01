import { NextFunction, Request, Response } from 'express'
import Menu from '../models/menu.model'
import Banner from '../models/banner.model'
import SolutionHighlight from '../models/solutionHighlight.model'
import { errorResponse, successResponse } from '../utils/response'
import Meta from '../models/meta.model'

export const getHomepageData = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const [meta, menus, banners, highlights] = await Promise.all([
      Meta.aggregate([
        {
          $match: {
            page: 'homepage'
          }
        },
        { $sort: { createdAt: -1 } }
      ]),
      Menu.aggregate([{ $match: {} }, { $sort: { createdAt: -1 } }]),
      Banner.aggregate([{ $match: {} }, { $sort: { createdAt: -1 } }]),
      SolutionHighlight.aggregate([{ $match: {} }, { $sort: { createdAt: -1 } }])
    ])

    const responseData = [
      { type: 'meta', data: meta[0] || {} },
      { type: 'menus', data: menus },
      { type: 'banners', data: banners },
      { type: 'solutionHighlights', data: highlights }
    ]
    successResponse(res, responseData, 'Done successfully')
    return
  } catch (error: any) {
    errorResponse(res, error.message || 'Failed to home data', 500, 'HOME_DATA_ERROR')
    return
  }
}
