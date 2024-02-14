import { inject, injectable } from 'tsyringe'
import { Todo } from '../../entities/Todo'
import { ITodoRepository } from '../../repositories/ITodoRepository'

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
