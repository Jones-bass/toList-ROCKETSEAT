import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { v4 as uuid } from 'uuid'
import { ContentList } from '../components/ContentList'
import { IconList } from '../components/IconList'

import { FormContainer, ContainerTask, ButtonTask } from './styles'

export function Home() {
  const [commentList, setComemmtList] = useState([
    {
      id: uuid(),
      title: 'JavaScript',
      isComplete: false,
    },

    {
      id: uuid(),
      title: 'Estudar ReactJS',
      isComplete: false,
    },
  ])

  const [newListText, setNewListText] = useState('') // texto

  const isNewList = newListText.length === 0

  function handleComment(event: FormEvent) {
    event.preventDefault()

    setComemmtList([
      ...commentList,
      {
        id: uuid(),
        title: newListText,
        isComplete: false,
      },
    ])

    setNewListText('')
  }

  function handleNewListChange(event: ChangeEvent<HTMLInputElement>) {
    setNewListText(event.target.value)
  }

  function handleNewListInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Por favor Preencher o campo!')
  }

  function deleteList(id: String) {
    const deleteOnComment = commentList.filter((task) => task.id !== id)

    setComemmtList(deleteOnComment)
  }

  function handleTaskCompletion(id: String) {
    const taskList = commentList.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete
      }

      return task
    })

    setComemmtList(taskList)
  }

  const concluded = commentList.filter((task) => {
    return task.isComplete !== false
  })

  return (
    <FormContainer onSubmit={handleComment}>
      <input
        className="input"
        name="list"
        placeholder="Adicione uma nova tarefa"
        value={newListText}
        onChange={handleNewListChange}
        onInvalid={handleNewListInvalid}
        required
      />

      <ButtonTask type="submit" disabled={isNewList}>
        Criar{' '}
        <PlusCircle style={{ fontSize: '1.4rem', marginBottom: '-0.3rem' }} />
      </ButtonTask>

      {commentList.length > 0 && (
        <ContainerTask>
          <div>
            <span className="textTask">Tarefas Criadas {''}</span>
            <span>{commentList.length}</span>
          </div>

          <div>
            <span className="textTask">Concluídas {''} </span>
            <span>
              {concluded.length} {''} de {''} {commentList.length}
            </span>
          </div>
        </ContainerTask>
      )}

      {commentList.map((item, index) => {
        if (!commentList) return null

        return (
          <ContentList
            key={index}
            handleTaskCompletion={handleTaskCompletion}
            isComplete={item.isComplete}
            onDeleteList={deleteList}
            taskList={item}
            title={item.title}
          />
        )
      })}

      <div>{commentList.length === 0 && <IconList />}</div>
    </FormContainer>
  )
}
