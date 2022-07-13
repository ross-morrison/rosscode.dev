import * as React from "react";
import type { NextPage } from "next";
import { Container, Divider, Typography } from "@mui/material";

/**
 * @author Ross Morrison <ross@rosscode.dev>
 */
const Java: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography mt={2} variant="body1">
        This app was created using Next.js!
      </Typography>
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {
      name: "Java",
    },
  };
}

export default Java;
