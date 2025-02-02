// rafceと入力後にタブキーを押します🤗
import React from "react";

// style.module.scssを読み込むには
// importというものを使い、ファイルを紐づける必要があります🤗
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import styles from "./style.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href={"/login"}>         
          <AccessibilityIcon />

            ログイン</Link>
        </li>
        <li>
          <Link href={"/signup"}>
          <AirplanemodeActiveIcon/>   
            
            登録</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
