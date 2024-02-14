import { PlusCircle } from 'phosphor-react'
import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useState,
  useEffect,
} from 'react'

import { ContentList } from '../components/ContentList'
import { IconList } from '../components/IconList'

import { FormContainer, ContainerTask, ButtonTask } from './styles'
import { api } from '../services/api'

export interface TodoProps {
  id: string
  title: string
  isComplete: boolean
}

export function Home() {
  const [commentList, setComemmtList] = useState<TodoProps[]>([])
  const [selectedTasks, setSelectedTasks] = useState<string[]>([])

  const [newListText, setNewListText] = useState('') // texto

  const isNewList = newListText.length === 0

  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    try {
      const response = await api.get('/todo')
      setComemmtList(response.data)
    } catch (error) {
      console.error('Erro ao buscar dados do servidor:', error)
    }
  }

  function handleNewListChange(event: ChangeEvent<HTMLInputElement>) {
    setNewListText(event.target.value)
  }

  function handleNewListInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Por favor Preencher o campo!')
  }

  async function deleteList(id: string) {
    await api.delete(`/todo/${id}`)
    const updatedCommentList = await api.get('/todo')
    setComemmtList(updatedCommentList.data)
  }

  async function handleComment(event: FormEvent) {
    event.preventDefault()
    try {
      await api.post('/todo', { title: newListText })
      setNewListText('')
      fetchTasks()
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error)
    }
  }

  async function handleTaskCompletion(id: string) {
    const updatedCommentList = commentList.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete }
      }
      return task
    })

    setComemmtList(updatedCommentList)

    // Adicionar ou remover o ID da tarefa selecionada do estado
    if (selectedTasks.includes(id)) {
      setSelectedTasks(selectedTasks.filter((taskId) => taskId !== id))
    } else {
      setSelectedTasks([...selectedTasks, id])
    }
  }

  const concluded = commentList.filter((task) => task.isComplete)

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
