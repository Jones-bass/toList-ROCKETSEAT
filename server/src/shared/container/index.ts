import { container } from 'tsyringe'
import { ITodoRepository } from '../../modules/dtos/ITodoRepository'
import { TodoRepository } from '../../modules/repositories/TodoRepository'

container.registerSingleton<ITodoRepository>('TodoRepository', TodoRepository)
