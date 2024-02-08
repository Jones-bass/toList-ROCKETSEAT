import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListTodoUseCase } from './ListTodoUseCase'

export class ListTodoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTodoUseCase = container.resolve(ListTodoUseCase)

    const all = await listTodoUseCase.execute()

    return response.json(all)
}}