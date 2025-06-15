const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    data: {
      type: String,
      required: true
    },
    iconPath: {
      type: String
    },
    iconContent: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

const Contact = mongoose.model('Contact', ContactSchema)
export default Contact
