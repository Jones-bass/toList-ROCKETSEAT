import { PlusCircle } from 'phosphor-react';

import styles from './Input.module.css';

export function Input() {
  return (
    <div className={styles.container}>
      <input className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa" />
        <button className={styles.button}>
        <a href="#">          
          Criar
        <PlusCircle size={20}/>
        </a>
        </button>
    </div>
  )
}


