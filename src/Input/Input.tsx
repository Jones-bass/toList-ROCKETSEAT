import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { ContentList } from "../ContentList/ContentList";

import styles from "./Input.module.css";

export function Input() {
  const [commentList, setComemmtList] = useState(
    ['Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.']
  );

  const [newListText, setNewListText] = useState('');

  function handleComment(event: FormEvent) {
    event.preventDefault();

    setComemmtList([...commentList, newListText]);
    setNewListText('');
  }

  function handleNewCommentsChange(event: ChangeEvent) {
    setNewListText(event.target.value);
  }

  function deleteList(toDeleteList: string) {
    const commentWithonnDeletedOne = commentList.filter(comment => {
      return comment !== toDeleteList;
    })

    setComemmtList(commentWithonnDeletedOne)
  }


  return (
    <form onSubmit={handleComment} className={styles.container}>
      <input className={styles.input}
        name="list"
        placeholder="Adicione uma nova tarefa"
        value={newListText}
        onChange={handleNewCommentsChange}
      />

      <button type="submit" className={styles.button}>
        Criar  {" "}
        <PlusCircle style={{ fontSize: '1.4rem', marginBottom: '-0.3rem' }} />
      </button>

      <div className={styles.descripion}>
        <p>Tarefas criadas</p>
        <p>Concluídas</p>
      </div>

      {commentList.map((list) => {
        return <ContentList
          onDeleteComments={deleteList}
          key={list}
          textList={list}
        />;
      })}
    </form>
  );
}

