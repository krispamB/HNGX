import express, { Express } from 'express'
import cors from 'cors'
import index from './routes/index'

const app: Express = express()
app.use(cors({origin: '*'}))
app.use(express.json())

app.use('/api', index)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
