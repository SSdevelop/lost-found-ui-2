import { useState, useEffect } from "react";
import {
  Box,
  Card,
  Typography,
  CardContent,
  Badge,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ImageInput from "./ImageInput";
import useVisibilityStore from "../store/visibilityStore";
const ImageQuery = () => {
  const [badgeVisibility, setBadgeVisibility] = useState(false);
  const { iamgeInput } = useVisibilityStore(state => ({
    iamgeInput: state.imageInput,
  }));

  useEffect(() => {
    if (iamgeInput.length > 0) {
      setBadgeVisibility(true);
    } else {
      setBadgeVisibility(false);
    }
  }, [iamgeInput]);

  return (
    <Box sx={{ minWidth: "400px", width: "95%", margin: "10px" }}>
      <Card
        variant="outlined"
        sx={{ borderRadius: "10px", backgroundColor: "#f7f8f8" }}
      >
        <CardContent sx={{ textAlign: "center", position: "relative" }}>
          <Typography gutterBottom variant="h5" component="div">
            Image Query
          </Typography>
          <IconButton
            aria-label="numImages"
            sx={{
              position: "absolute",
              right: "5%",
              top: "20%",
              // display: "none",
            }}
          >
            <Badge
              badgeContent={1}
              color="primary"
              variant="dot"
              overlap="circular"
              sx={{ display: badgeVisibility ? "block" : "none" }}
            >
              <VisibilityIcon />
            </Badge>
          </IconButton>
        </CardContent>
        <CardContent sx={{ padding: 0 }}>
          <ImageInput />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ImageQuery;
