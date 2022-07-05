import React from "react";
import styles from "./ContentImageItem.module.css";

export default function ContentImagesItem() {
  return (
      <div className={styles.card}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXUcGQjCJKjUB-NF25RZ1La1ScGiT-5oh7A&usqp=CAU" alt={"test"} />
        <p>Gambar logo js</p>
        <a href="#">Microsoft Office</a>
      </div>
  );
}
