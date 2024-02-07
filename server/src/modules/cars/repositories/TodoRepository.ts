import { Repository } from 'typeorm'

import { Todo } from '../entities/Todo'
import { ICreateTodoDTO, ITodoRepository } from '../dtos/ITodoRepository'
import { AppDataSource } from '../../../data-source'

export class TodoRepository implements ITodoRepository {
  private repository: Repository<Todo>

  constructor() {
    this.repository = AppDataSource.getRepository(Todo)
  }

  async create({ title }: ICreateTodoDTO): Promise<Todo> {
    const todo = this.repository.create({
      title,
    })

    await this.repository.save(todo)

    return todo
  }

  async list(): Promise<Todo[]> {
    const todoList = await this.repository.find()
    return todoList
  }

  async delete(id: string): Promise<Todo | undefined> {
    const todoToDelete = await this.repository.findOne({ where: { id } })
    if (!todoToDelete) {
      return undefined
    }
    await this.repository.remove(todoToDelete)
    return todoToDelete
  }
}
