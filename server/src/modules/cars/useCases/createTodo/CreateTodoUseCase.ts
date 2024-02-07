import { inject, injectable } from 'tsyringe'
import { TodoRepository } from '../../repositories/TodoRepository'

interface IRequest {
  title: string
}

@injectable()
export class CreateTodoUseCase {
  constructor(
    @inject('TodoRepository')
    private todoRepository: TodoRepository,
  ) {}

  async execute({ title }: IRequest): Promise<void> {
    await this.todoRepository.create({ title })
  }
}
