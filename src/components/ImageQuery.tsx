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
import ImageListModal from "./ImageListModal";

const ImageQuery = () => {
  const [badgeVisibility, setBadgeVisibility] = useState<boolean>(false);
  const [badgeCount, setBadgeCount] = useState<number>(0);
  const [openModel, setOpenModel] = useState<boolean>(false);
  const { imageInput } = useVisibilityStore(state => ({
    imageInput: state.imageInput,
  }));

  useEffect(() => {
    if (imageInput.length > 0) {
      setBadgeVisibility(() => true);
      setBadgeCount(() => imageInput.length);
    } else {
      setBadgeVisibility(() => false);
    }
  }, [imageInput]);

  const handleClose = () => setOpenModel(false);
  const handleBadgeClick = () => setOpenModel(true);

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
              badgeContent={badgeCount}
              color="primary"
              overlap="circular"
              sx={{ display: badgeVisibility ? "block" : "none" }}
              onClick={handleBadgeClick}
            >
              <VisibilityIcon />
            </Badge>
          </IconButton>
        </CardContent>
        <CardContent sx={{ padding: 0 }}>
          <ImageInput />
        </CardContent>
      </Card>
      <ImageListModal open={openModel} handleClose={handleClose} />
    </Box>
  );
};

export default ImageQuery;
