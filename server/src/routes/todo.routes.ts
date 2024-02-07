import { Router } from 'express'
import { CreateTodoController } from '../modules/cars/useCases/createTodo/CreateTodoController'

export const todoRoutes = Router()

const createTodoController = new CreateTodoController()

todoRoutes.post('/', createTodoController.handle)
