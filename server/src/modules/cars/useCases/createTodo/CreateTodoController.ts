import { Response, Request } from 'express'
import { container } from 'tsyringe'
import { CreateTodoUseCase } from './CreateTodoUseCase'

export class CreateTodoController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { title } = request.body

      const createTodoUseCase = container.resolve(CreateTodoUseCase)

      await createTodoUseCase.execute({ title })
    } catch (err) {
      console.log(err)
    }

    return response.status(201).json({ Todo: 'Criado com sucesso' })
  }
}
