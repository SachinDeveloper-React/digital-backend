import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import menuRoutes from './routes/menu.routes'
import homeRoutes from './routes/home.routes'
import bannerRoutes from './routes/banner.routes'
import metaRoutes from './routes/meta.routes'
import solutionHighlightsRoutes from './routes/solutionHighlights.routes'
import { errorHandler } from './middlewares/errorHandler'
dotenv.config()

// const app = express()
const app: Application = express()

// Middlewares
app.use(express.json())
app.use(helmet())
app.use(cors({ origin: true, credentials: true }))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compression())
app.use(errorHandler)

// Routes
app.use('/api/meta', metaRoutes)
app.use('/api/homepage', homeRoutes)
app.use('/api/menus', menuRoutes)
app.use('/api/banner', bannerRoutes)
app.use('/api/solution-highlights', solutionHighlightsRoutes)

// Health check
app.get('/', (_req, res: any) => res.send('API is running 🚀'))

export default app
