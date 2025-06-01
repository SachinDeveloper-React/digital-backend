import metaModel from '../models/meta.model'

export interface MetaData {
  page: string
  title: string
  description?: string
  keywords?: string
  faviconUrl?: string
}

export const createMeta = async (data: MetaData) => {
  const meta = new metaModel(data)
  return meta.save()
}

export const getAllMeta = async () => {
  return metaModel.find()
}
export const getMetabypage = async (page: string) => {
  return metaModel.findOne({ page })
}

export const updateMetaById = async (id: string, updates: MetaData) => {
  return metaModel.findByIdAndUpdate(id, updates, { new: true })
}

export const deleteMetaById = async (id: string) => {
  return metaModel.findByIdAndDelete(id)
}
