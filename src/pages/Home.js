import { Container, Stack } from "react-bootstrap";

import React, { useState } from "react";
import Input from "../components/Search/Input";

export default function Home() {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <Container>
      <Stack
        className="vh-100 justify-content-center align-items-center"
        gap={4}
      >
        <div>
          <img
          alt={"test"}
            src={
              isTyping
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                : "https://lifeofahomeschoolersite.files.wordpress.com/2018/02/g-dots.gif"
            }
            width={180}
          />
        </div>
        <Input onTyping={setIsTyping} />
      </Stack>
    </Container>
  );
}
