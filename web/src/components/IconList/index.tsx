import List from '../../../src/assets/logoList.png'
import { ContainerIcon, IconImage } from './styles'

export const IconList = () => {
  return (
    <ContainerIcon>
      <IconImage>
        <img src={List} alt="" />
      </IconImage>
      <p>
        Você ainda não tem tarefas cadastradas <br /> Crie tarefas e organize
        seus itens a fazer
      </p>
    </ContainerIcon>
  )
}
