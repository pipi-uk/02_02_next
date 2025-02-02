import React from "react";
import styles from "./style.module.scss";
import { PostProps } from "@/pages";

const Post: React.FC<PostProps> = ({ id, name, date, content }) => {
  // const Post = ({ name, date, content }: PostProps) => {
  return (
    <div className={styles.post} key={id}>
      <p>{id}</p>
      <p>{name}</p>
      <p>{date}</p>
      <p>{content}</p>
    </div>
  );
};

export default Post