import { Router } from 'express'
import { CreateTodoController } from '../modules/useCases/createTodo/CreateTodoController'
import { DeleteTodoController } from '../modules/useCases/deleteTodo/DeleteTodoController'
import { ListTodoController } from '../modules/useCases/listTodo/ListTodoController'

export const todoRoutes = Router()

const createTodoController = new CreateTodoController()
const listTodoController = new ListTodoController()
const deleteTodoController = new DeleteTodoController()

todoRoutes.post('/', createTodoController.handle)
todoRoutes.get('/', listTodoController.handle)
todoRoutes.delete('/:id', deleteTodoController.handle)
