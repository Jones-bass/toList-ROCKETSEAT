import { Trash } from 'phosphor-react'
import { Checkbox } from '../Checkbox'
import { Container, ContainerCheckbox, ContentItem } from './styles'
import { TodoProps } from '../../page'

interface ContentProps {
  title: string
  isComplete: boolean
  taskList: TodoProps
  onDeleteList: (id: string) => void
  handleTaskCompletion: (comment: string) => void
}

export function ContentList({
  title,
  onDeleteList,
  taskList,
  handleTaskCompletion,
}: ContentProps) {
  return (
    <Container>
      <ContentItem>
        <ContainerCheckbox>
          <Checkbox
            checked={taskList.isComplete}
            onChange={() => handleTaskCompletion(taskList.id)}
          />
        </ContainerCheckbox>
        <div className="text">{title}</div>
        <button onClick={() => onDeleteList(taskList.id)} type="button">
          <Trash className="trash" size={20} />
        </button>
      </ContentItem>
    </Container>
  )
}
