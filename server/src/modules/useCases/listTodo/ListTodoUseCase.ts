import { inject, injectable } from 'tsyringe'
import { ITodoRepository } from '../../dtos/ITodoRepository'
import { Todo } from '../../entities/Todo'

@injectable()
export class ListTodoUseCase {
  constructor(
    @inject('TodoRepository')
    private todoRepository: ITodoRepository,
  ) {}

  async execute(): Promise<Todo[]> {
    const todoList = await this.todoRepository.list()

    return todoList
  }
}
