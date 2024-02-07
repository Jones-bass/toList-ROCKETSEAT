import { container } from 'tsyringe'
import { ITodoRepository } from '../../modules/cars/dtos/ITodoRepository'
import { TodoRepository } from '../../modules/cars/repositories/TodoRepository'

container.registerSingleton<ITodoRepository>('TodoRepository', TodoRepository)
