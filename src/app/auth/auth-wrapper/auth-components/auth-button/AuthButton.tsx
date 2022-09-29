import React from "react";
interface IProps {
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
  text: string;
}
const AuthButton: React.FC<IProps> = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

export default AuthButton;
