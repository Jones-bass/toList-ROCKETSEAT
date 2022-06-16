import { Trash } from "phosphor-react";
import styles from "./ContentList.module.css";

interface ContentProps {
  text: string;
}
export function ContentList({ text }: ContentProps) {
  return (
    <div className={styles.content}>
      <div className={styles.section}>
        <label>
          <input type="radio" />
        </label>
        <div className={styles.text}>{text}</div>

        <button>
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}
