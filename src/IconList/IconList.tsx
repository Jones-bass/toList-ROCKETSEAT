import List from '../../src/assets/logoList.png'
import styles from "./IconList.module.css";

export const IconList = () => {
    return (
        <div className={styles.ContainerIcon}>
            <img className={styles.icon} src={List} alt="" />
            <div className={styles.text}>
                <p className={styles.font}>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}