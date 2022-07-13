import { Box, Typography } from "@mui/material";
import theme from "../styles/theme/theme";

type FooterProps = {};

/**
 * @author Ross Morrison <ross@rosscode.dev>
 */
export default function Footer(props: FooterProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: theme.spacing(2),
        left: 0,
        right: 0,
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        Rendered using Next.JS on {new Date().toDateString()}
      </Typography>
    </Box>
  );
}
