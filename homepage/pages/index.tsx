import * as React from "react";
import type { NextPage } from "next";
import { Button, Container, Divider, Typography } from "@mui/material";
import MediaCard from "../components/default/MediaCard";
import Link from "../components/default/Link";

/**
 * @author Ross Morrison <ross@rosscode.dev>
 */
const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant="h4">
        Welcome to my homepage!
      </Typography>
      <Divider />
      <br />
      <MediaCard
        width={256}
        height={160}
        image={
          "https://res.cloudinary.com/practicaldev/image/fetch/s---geKH-gk--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2rzr9vdyfmu2pnwqigyo.jpg"
        }
        alt={"TypeScript"}
        title={"TypeScript"}
        description={"View my experiences with TypeScript"}
        actions={[
          <Button
            key="view"
            component={Link}
            href="/typescript"
            color="primary"
          >
            View
          </Button>,
        ]}
      />
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
