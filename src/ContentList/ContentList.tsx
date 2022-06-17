import { Trash } from "phosphor-react";
import styles from "./ContentList.module.css";

interface ContentProps {
  textList: string;
  onDeleteComments: (comment: string)  => void
}

export function ContentList({ textList, onDeleteComments}: ContentProps) {
 
  function handleDeleteList() {
    onDeleteComments(textList)
  }

  return (
    <div className={styles.content}>
      <div className={styles.section}>
        <label>
          <input type="radio" />
        </label>
        <div className={styles.text}>{textList}</div>

        <button onClick={handleDeleteList} title="Deletar lista">
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}
