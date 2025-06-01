import { Request, Response } from 'express'
import * as service from '../services/solutionHighlights.service'
import { errorResponse, successResponse } from '../utils/response'

export const createSolutionHighlights = async (req: Request, res: Response) => {
  try {
    const created = await service.createHighlight(req.body)
    successResponse(res, created, 'Highlight created successfully', 201)
    return
  } catch (error: any) {
    errorResponse(res, error.message || 'Failed to create highlight', 500, 'CREATE_HIGHLIGHT_ERROR')
    return
  }
}

export const getSolutionHighlights = async (_req: Request, res: Response) => {
  try {
    const highlights = await service.getHighlights()
    successResponse(res, highlights, 'Highlights fetched successfully')
    return
  } catch (error: any) {
    errorResponse(res, error.message || 'Failed to fetch highlights', 500, 'GET_HIGHLIGHTS_ERROR')
    return
  }
}

export const getSolutionHighlightsById = async (req: Request, res: Response) => {
  try {
    const highlight = await service.getHighlightById(req.params.id)
    if (!highlight) {
      errorResponse(res, 'Highlight not found', 404, 'HIGHLIGHT_NOT_FOUND')
      return
    }
    successResponse(res, highlight, 'Highlights fetched by id successfully')
    return
  } catch (error: any) {
    errorResponse(
      res,
      error.message || 'Failed to fetch highlight by ID',
      500,
      'GET_HIGHLIGHT_BY_ID_ERROR'
    )
    return
  }
}

export const updateSolutionHighlights = async (req: Request, res: Response) => {
  try {
    const updated = await service.updateHighlightById(req.params.id, req.body)
    if (!updated) {
      errorResponse(res, 'Highlight not found', 404, 'HIGHLIGHT_NOT_FOUND')
      return
    }
    successResponse(res, updated, 'Highlight updated successfully')
    return
  } catch (error: any) {
    errorResponse(res, error.message || 'Failed to update highlight', 500, 'UPDATE_HIGHLIGHT_ERROR')
    return
  }
}

export const deleteSolutionHighlights = async (req: Request, res: Response) => {
  try {
    const deleted = await service.deleteHighlightById(req.params.id)
    if (!deleted) {
      errorResponse(res, 'Highlight not found', 404, 'HIGHLIGHT_NOT_FOUND')
      return
    }
    successResponse(res, { message: 'Highlight deleted' }, 'Highlight deleted successfully')
    return
  } catch (error: any) {
    errorResponse(res, error.message || 'Failed to delete highlight', 500, 'DELETE_HIGHLIGHT_ERROR')
    return
  }
}
