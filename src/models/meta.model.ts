import mongoose from 'mongoose'

const metaSchema = new mongoose.Schema(
  {
    page: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    keywords: { type: String },
    faviconUrl: { type: String }
  },
  { timestamps: true }
)

export default mongoose.model('Meta', metaSchema)
