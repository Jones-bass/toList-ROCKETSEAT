import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { ContentList } from "../ContentList/ContentList";

import styles from "./Input.module.css";

export function Input() {
  const [count, setCount] = useState(1);

  const [commentList, setComemmtList] = useState( //container
    ['Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.']
  );

  const [newListText, setNewListText] = useState(''); //texto

  const isNewList = newListText.length === 0;

  function handleComment(event: FormEvent) {
    event.preventDefault();

    setComemmtList([...commentList, newListText]);
    setNewListText('');
  }

  function handleNewListChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewListText(event.target.value);
  }

  function handleNewListInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Por favor Preencher o campo!')
  }

  function deleteList(toDeleteList: string) {
    const deleteOnComment = commentList.filter(comment => {
      return comment !== toDeleteList;
    })

    setComemmtList(deleteOnComment)
  }

  function decrementList() {
    setCount(count - 1)
  }

  function incrementList() {
    setCount(count + 1)
  }


  return (
    <form onSubmit={handleComment} className={styles.container}>
      <input className={styles.input}
        name="list"
        placeholder="Adicione uma nova tarefa"
        value={newListText}
        onChange={handleNewListChange}
        onInvalid={handleNewListInvalid}
        required
      />

      <button type="submit" disabled={isNewList} className={styles.button}
        onClick={incrementList}
      >

        Criar  {" "}
        <PlusCircle style={{ fontSize: '1.4rem', marginBottom: '-0.3rem' }} />
      </button>

      <div className={styles.descripion}>
        <p>Tarefas criadas {count} </p>
        <p>Concluídas {count} </p>
      </div>

      {commentList.map((list) => {
        return <ContentList
          key={list}
          onListDecrement={decrementList}
          onDeleteList={deleteList}
          textList={list}
        />;
      })}
    </form>
  );
}

