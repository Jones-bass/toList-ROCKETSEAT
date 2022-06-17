import { Trash } from "phosphor-react";
import styles from "./ContentList.module.css";

interface ContentProps {
  textList: string;
  onDeleteList: (comment: string)  => void;
  onListDecrement: (comment: string)  => void
}

export function ContentList({ textList, onDeleteList, onListDecrement}: ContentProps) {

  function handleDeleteList() {
    onDeleteList(textList)
  }

  function HandleDescrementList() {
    onListDecrement(textList)
  }

  return (
    <div className={styles.content}>
      <div className={styles.section}>
        <label>
          <input type="radio" />
        </label>
        <div className={styles.text}>{textList}</div>

        <button onClick={HandleDescrementList} title="Deletar lista">
          <Trash onClick={handleDeleteList} size={20} />
        </button>
      </div>
    </div>
  );
}
