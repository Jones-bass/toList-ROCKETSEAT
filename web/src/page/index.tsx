import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState, useEffect } from 'react'

import { v4 as uuid } from 'uuid'
import { ContentList } from '../components/ContentList'
import { IconList } from '../components/IconList'

import { FormContainer, ContainerTask, ButtonTask } from './styles'
import { api } from '../services/api'

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

  useEffect(() => {
    // Fetch data from the API when the component mounts
    async function fetchData() {
      try {
        const response = await api.get('/todo') // Assuming your API endpoint for fetching data is /todo
        setComemmtList(response.data)
      } catch (error) {
        console.error('Erro ao buscar dados do servidor:', error)
      }
    }

    fetchData()
  }, [])

  async function handleComment(event: FormEvent) {
    event.preventDefault()

    try {
      const response = await api.post('/todo', {
        title: newListText,
      })

      const newTask = {
        id: response.data.id,
        title: newListText,
        isComplete: false,
      }

      setComemmtList([...commentList, newTask])
      setNewListText('')
    } catch (error) {
      console.error('Erro ao adicionar nova tarefa:', error)
    }
  }

  function handleNewListChange(event: ChangeEvent<HTMLInputElement>) {
    setNewListText(event.target.value)
  }

  function handleNewListInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Por favor Preencher o campo!')
  }

  async function deleteList(id: string) {
    try {
      await api.delete(`/todo/${id}`)
      const updatedCommentList = await api.get('/todo')
      setComemmtList(updatedCommentList.data)
    } catch (error) {
      console.error('Erro ao excluir tarefa do servidor:', error)
    }
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
