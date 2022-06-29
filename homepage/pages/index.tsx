import * as React from "react";
import type { NextPage } from "next";
import { Container, Divider, Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant="h4">Welcome to my homepage!</Typography>
      <Divider />
      <Typography mt={2} variant="body1">
        This app was created using Next.js!
      </Typography>
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {
      name: "Home",
    },
  };
}

export default Home;
