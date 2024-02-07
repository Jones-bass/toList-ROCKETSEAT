import 'reflect-metadata'

import express from 'express'

import { router } from './routes'
import cors from 'cors'

import './shared/container'
import { AppDataSource } from './data-source'

AppDataSource.initialize().then(() => {
  const app = express()
  app.use(express.json())
  app.use(cors())

  app.use(router)

  app.listen(process.env.PORT, () => {
    console.log('🚀 Server started on port 3333!')
  })
})
