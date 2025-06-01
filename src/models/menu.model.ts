import mongoose from 'mongoose'

const submenuSchema = new mongoose.Schema({
  label: { type: String, required: true },
  link: { type: String, required: true }
})

const menuSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    link: { type: String, required: true },
    submenu: [submenuSchema]
  },
  { timestamps: true }
)

const Menu = mongoose.model('Menu', menuSchema)
export default Menu
