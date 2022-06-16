
import { Trash } from 'phosphor-react';
import styles from './ContentList.module.css';

export function ContentList() {
  return (
    <div className={styles.content}>
      <div className={styles.descripion}>
        <p>Tarefas criadas</p>
        <p>Concluídas</p>
      </div>

      <div className={styles.section}>
        <label>
          <input
            type="radio"
          />
        </label>
        <p> Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames int juns Duis. </p>

        <button title="Deletar">
          <Trash size={20} />
        </button>
      </div>

      <div className={styles.section}>
        <label>
          <input
            type="radio"
          />
        </label>
        <p> Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames int juns Duis. </p>

        <button title="Deletar">
          <Trash size={20} />
        </button>
      </div>


      <div className={styles.section}>
        <label>
          <input
            type="radio"
          />
        </label>
        <p> Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames int juns Duis. </p>

        <button title="Deletar">
          <Trash size={20} />
        </button>
      </div>


      
    </div>
  )
}