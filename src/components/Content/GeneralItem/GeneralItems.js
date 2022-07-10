import { Stack } from "react-bootstrap";

import React from "react";
import Card from "../../UI/Card";
import ContentGeneralItem from "./ContentGeneralItem";

export default function GeneralItems({ data }) {
  return (
    <Stack>
      {data.map((content) => (
        <Card>
          <ContentGeneralItem content={content} />
        </Card>
      ))}
    </Stack>
  );
}
