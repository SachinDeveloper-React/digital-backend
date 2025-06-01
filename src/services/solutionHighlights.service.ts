import solutionHighlightModel, { ISolutionHighlight } from '../models/solutionHighlight.model'

export const createHighlight = async (
  data: Partial<ISolutionHighlight>
): Promise<ISolutionHighlight> => {
  const created = await solutionHighlightModel.create(data)
  return created
}

export const getHighlights = async (): Promise<ISolutionHighlight[]> => {
  return await solutionHighlightModel.find()
}

export const getHighlightById = async (id: string): Promise<ISolutionHighlight | null> => {
  return await solutionHighlightModel.findById(id)
}

export const updateHighlightById = async (
  id: string,
  data: Partial<ISolutionHighlight>
): Promise<ISolutionHighlight | null> => {
  return await solutionHighlightModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  })
}

export const deleteHighlightById = async (id: string): Promise<ISolutionHighlight | null> => {
  return await solutionHighlightModel.findByIdAndDelete(id)
}
