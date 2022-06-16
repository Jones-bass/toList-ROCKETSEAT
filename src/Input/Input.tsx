import { PlusCircle } from "phosphor-react";
import { FormEvent, FormEventHandler, useState } from "react";
import { ContentList } from "../ContentList/ContentList";

import styles from "./Input.module.css";

export function Input(text: string) {
  const [comment, setComemmt] = useState(["Ola Mundo!"]);

  function handleComment(event: FormEvent) {
    event.preventDefault();

    const newList = event.target.list.value;

    setComemmt([...comment, newList]);
  }
  return (
    <form onSubmit={handleComment} className={styles.container}>
      <input
        className={styles.input}
        name="list"
        placeholder="Adicione uma nova tarefa"
      />

      <button type="submit" className={styles.button}>
        Criar {" "}
          <PlusCircle size={18} />
      
      </button>

      <div className={styles.descripion}>
        <p>Tarefas criadas</p>
        <p>Concluídas</p>
      </div>

      {comment.map((comments) => {
        return <ContentList text={comments} />;
      })}
    </form>
  );
}
