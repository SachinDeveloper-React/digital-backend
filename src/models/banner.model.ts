import mongoose from 'mongoose'

const ButtonSchema = new mongoose.Schema({
  label: { type: String, required: true },
  link: { type: String, required: true },
  icon: { type: String }
})

const BannerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    backgroundImage: { type: String },
    buttons: [ButtonSchema],
    animationIcons: [{ type: String }]
  },
  { timestamps: true }
)

export default mongoose.model('Banner', BannerSchema)
