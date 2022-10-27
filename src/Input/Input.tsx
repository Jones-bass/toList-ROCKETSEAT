import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { ContentList } from "../ContentList/ContentList";

import { v4 as uuid } from "uuid";

import styles from "./Input.module.css";
import { IconList } from "../IconList/IconList";

export function Input() {
  const [commentList, setComemmtList] = useState([
    {
      id: uuid(),
      title: "Estudar JavaScript",
      isComplete: false,
    },

    {
      id: uuid(),
      title: "Estudar TypeScript",
      isComplete: false,
    },
    {
      id: uuid(),
      title: "Estudar ReactJS",
      isComplete: false,
    },
  ]);

  const [newListText, setNewListText] = useState(""); //texto

  const isNewList = newListText.length === 0;

  function handleComment(event: FormEvent) {
    event.preventDefault();

    setComemmtList([
      ...commentList,
      {
        id: uuid(),
        title: newListText,
        isComplete: false,
      },
    ]);

    setNewListText("");
  }

  function handleNewListChange(event: ChangeEvent<HTMLInputElement>) {
    setNewListText(event.target.value);
  }

  function handleNewListInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Por favor Preencher o campo!");
  }

  function deleteList(id: String) {
    const deleteOnComment = commentList.filter((task) => task.id !== id);

    setComemmtList(deleteOnComment);
  }
  
  function handleTaskCompletion(id: String) {
    const taskList = commentList.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }

      return task;
    });

    setComemmtList(taskList);
  }

  const concluded = commentList.filter((task) => {
    return task.isComplete !== false;
  });

  return (
    <form onSubmit={handleComment} className={styles.container}>
      <input
        className={styles.input}
        name="list"
        placeholder="Adicione uma nova tarefa"
        value={newListText}
        onChange={handleNewListChange}
        onInvalid={handleNewListInvalid}
        required
      />

      <button type="submit" disabled={isNewList} className={styles.button}>
        Criar{" "}
        <PlusCircle style={{ fontSize: "1.4rem", marginBottom: "-0.3rem" }} />
      </button>

      <div className={styles.descripion}></div>

      {commentList.length > 0 && (
        <header className={styles.containerTarefa}>
          <div>
            <span className={styles.textSpan}>Tarefas Criadas</span>
            <span> {''} {commentList.length}</span>
          </div>

          <div>
            <span className={styles.textSpan}>Concluídas {''} </span>
            <span>{concluded.length} {''} de {''} {commentList.length}
            </span>
          </div>
        </header>
      )}

      {commentList.map((list) => {
        if (commentList.length > 0) {
          return (
            <ContentList
              key={list.id}
              handleTaskCompletion={handleTaskCompletion}
              isComplete={list.isComplete}
              onDeleteList={deleteList}
              taskList={list}
              title={list.title}
            />
          );
        }
      })}

      <div>{commentList.length === 0 && <IconList />}</div>
    </form>
  );
}
