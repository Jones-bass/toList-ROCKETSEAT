import { container } from 'tsyringe'
import { TodoRepository } from '../../modules/repositories/TodoRepository'
import { ITodoRepository } from '../../modules/repositories/ITodoRepository'

container.registerSingleton<ITodoRepository>('TodoRepository', TodoRepository)
