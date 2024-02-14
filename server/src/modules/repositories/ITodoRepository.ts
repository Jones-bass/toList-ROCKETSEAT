/* eslint-disable prettier/prettier */
import { Todo } from "../entities/Todo"

export interface ICreateTodoDTO {
  title: string
}

export interface ITodoRepository {
  create(data: ICreateTodoDTO): Promise<Todo>
  list(): Promise<Todo[]>
  delete(id: string): Promise<Todo | undefined>
}
