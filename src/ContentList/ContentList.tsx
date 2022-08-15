import { Trash } from "phosphor-react";
import styles from "./ContentList.module.css";

interface taskProps {
  id: string;
  isComplete: boolean;
}

interface ContentProps {
  title: string;
  isComplete: boolean;
  taskList: taskProps;
  onDeleteList: (comment: string) => void;
  handleTaskCompletion: (comment: string) => void;
}

export function ContentList({
  title,
  onDeleteList,
  taskList,
  handleTaskCompletion,
}: ContentProps) {
  return (
    <>
    <ul className={styles.content}>
      <li className={styles.section}>
        <div>
          <input 
            defaultChecked={taskList.isComplete}
            onClick={() => handleTaskCompletion(taskList.id)}
            type="checkbox"
          />
        </div>
        <div className={styles.text}>{title}</div>

        <button onClick={() => onDeleteList(taskList.id)} type='button'>
          <Trash className={styles.trash} size={20} />
        </button>
      </li>
    </ul>
    </>
  );
}
