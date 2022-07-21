import { Trash } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import styles from "./ContentList.module.css";

interface ContentProps {
  textList: string;
  onDeleteList: (comment: string)  => void;
  onListDecrement: (comment: string)  => void
}

export function ContentList({ textList, onDeleteList, onListDecrement}: ContentProps) {
  const [termo, setTermo] = useState('')

  function handleDeleteList() {
    onDeleteList(textList)
  }

  function HandleDescrementList() {
    onListDecrement(textList)
  }

  function handleChangeRadio(event: ChangeEvent<HTMLInputElement>) {
    setTermo(event.target.value)
  }
 
  return (
    <div className={styles.content}>
      <div className={styles.section}>
        <label>
          <input 
          type="radio" 
          value="radio"
          onChange={handleChangeRadio} 
          />
        </label>
        <div className={styles.text}>{textList}</div>

        <button onClick={handleDeleteList} title="Deletar lista">
          <Trash onClick={HandleDescrementList} size={20} />
        </button>

      </div>
    </div>
  );
}

