import { inject, injectable } from 'tsyringe'
import { Todo } from '../../entities/Todo'
import { ITodoRepository } from '../../repositories/ITodoRepository'

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
