import { FC, ImgHTMLAttributes } from "react";
import styles from "./ActionButton.module.scss";

interface IActionButton {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  image: string;
}

export const ActionButton: FC<IActionButton> = ({ text, image }) => {
  return (
    <div className={styles.buttonGroup}>
      <button onClick={() => alert(`${text}`)}>
        <img src={image} alt="delete" />
        <span>{text}</span>
      </button>
    </div>
  );
};
