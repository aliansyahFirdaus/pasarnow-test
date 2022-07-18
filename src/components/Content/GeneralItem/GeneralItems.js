import { Stack } from "react-bootstrap";

import React from "react";
import Card from "../../UI/Card";
import ContentGeneralItem from "./ContentGeneralItem";
import styles from "./GeneralItems.module.css";

export default function GeneralItems({ data }) {
  return (
    <Stack>
      <Stack
        direction="horizontal"
        gap={3}
        className={styles["image-carousel"]}
      >
        {data.images.status.current === "success" ? (
          <Stack direction="horizontal" gap={1}>
            {data?.images?.data?.map((img) => (
              <img src={img.image.src} />
            ))}
          </Stack>
        ) : (
          <p>Loading...</p>
        )}
      </Stack>
      {data.site.map((content) => (
        <Card>
          <ContentGeneralItem content={content} />
        </Card>
      ))}
    </Stack>
  );
}
