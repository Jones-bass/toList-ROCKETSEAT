import { inject, injectable } from 'tsyringe'
import { ITodoRepository } from '../../dtos/ITodoRepository'
import { Todo } from '../../entities/Todo'

@injectable()
export class DeleteTodoUseCase {
  constructor(
    @inject('TodoRepository')
    private todoRepository: ITodoRepository,
  ) {}

  async execute(id: string): Promise<Todo | undefined> {
    const deleteTodoList = await this.todoRepository.delete(id)

    return deleteTodoList
  }
}
