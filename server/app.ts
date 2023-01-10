import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app: Application = express()

app.use(cors())
morgan('dev')

export default app