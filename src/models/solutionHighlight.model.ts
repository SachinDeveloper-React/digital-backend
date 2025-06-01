import mongoose, { Schema, Document } from 'mongoose'

interface Button {
  label: string
  link: string
  icon?: string
}

export interface ISolutionHighlight extends Document {
  title: string
  subtitle: string
  image: string
  buttons: Button[]
  points?: string[]
}

const SolutionHighlightSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    image: { type: String, required: true },
    buttons: [
      {
        label: { type: String, required: true },
        link: { type: String, required: true },
        icon: { type: String }
      }
    ],
    points: [String]
  },
  { timestamps: true }
)

export default mongoose.model<ISolutionHighlight>('SolutionHighlight', SolutionHighlightSchema)
