import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type MediaCardProps = {
  width: number;
  height: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  actions: React.ReactNode[];
};

export default function MediaCard(props: MediaCardProps) {
  return (
    <Card sx={{ maxWidth: props.width }}>
      <CardMedia
        component="img"
        height={props.height}
        image={props.image}
        alt={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        {props.actions}
      </CardActions>
    </Card>
  );
}
