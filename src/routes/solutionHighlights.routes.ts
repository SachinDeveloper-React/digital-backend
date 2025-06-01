import express from 'express'
import {
  createSolutionHighlights,
  deleteSolutionHighlights,
  getSolutionHighlightsById,
  updateSolutionHighlights,
  getSolutionHighlights
} from '../controllers/solutionHighlight.controller'
import { solutionHighlightSchema } from '../validations/solutionHighlights.validation'
import { validateBody } from '../middlewares/validate'

const router = express.Router()

router.post('/', validateBody(solutionHighlightSchema), createSolutionHighlights)
router.get('/', getSolutionHighlights)
router.get('/:id', getSolutionHighlightsById)
router.put('/:id', validateBody(solutionHighlightSchema), updateSolutionHighlights)
router.delete('/:id', deleteSolutionHighlights)

export default router
