import { Trash } from 'phosphor-react'
import { Checkbox } from '../Checkbox'
import { Container, ContainerCheckbox, ContentItem } from './styles'

interface taskProps {
  id: string
  isComplete: boolean
}

interface ContentProps {
  title: string
  isComplete: boolean
  taskList: taskProps
  onDeleteList: (comment: string) => void
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
            defaultChecked={taskList.isComplete}
            onClick={() => handleTaskCompletion(taskList.id)}
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
