import Head from "next/head";
import styles from "@/styles/style.module.scss";
import Header from "@/components/Header";
import TimeLine from "@/components/Timeline";
import Post from "@/components/Post";
// import Button from "@/components/Button";
import { useEffect, useState } from "react";

export interface PostProps {
  id: string | number;
  name: string;
  date: string;
  content: string;
}

// ダミーデータ
const dummyData: PostProps[] = [
  { id: 1, name: "山田 太郎", date: "2024-02-01", content: "今日はReactの勉強をしました！" },
  { id: 2, name: "佐藤 花子", date: "2024-02-02", content: "新しいプロジェクトが始まりました。" },
  { id: 3, name: "鈴木 一郎", date: "2024-02-03", content: "Next.jsのSSRを試しています。" },
  { id: 4, name: "田中 桃子", date: "2024-02-04", content: "UIデザインの改善を行いました。" },
  { id: 5, name: "中村 健", date: "2024-02-05", content: "TypeScriptの型安全性について学習中。" },
];

export default function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    setPosts(dummyData);
    console.log("useEffect");
  }, []);

  console.log(posts, "データ");

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.container}>
        <TimeLine />
        {/* <Button label="Button" color="white" bg="black" /> */}

        {posts.map((post: PostProps) => (
          <Post key={post.id} id={post.id} name={post.name} date={post.date} content={post.content} />
        ))}

        {/* <Post name="haha" date="2025-01-01" content="TypeScriptの勉強中" /> */}
      </main>
    </>
  );
}