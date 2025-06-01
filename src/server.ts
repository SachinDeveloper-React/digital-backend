import mongoose from 'mongoose'
import app from './app'

const PORT = process.env.PORT || 8000
const MONGO_URI = process.env.MONGO_URI || ''

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
    // app.listen(PORT, () => {
    //   console.log(`Server running on port ${PORT}`)
    //   console.log(`Server running on http://localhost:${PORT}`)
    // })
    app.listen(PORT, () => {
      console.log(`Server is running at port : ${PORT}`)
    })
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })
